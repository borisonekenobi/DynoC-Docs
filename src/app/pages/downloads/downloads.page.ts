import {Component} from '@angular/core';
import {ReleaseService} from '../../services/release-service';
import {Release} from '../../models/release';
import {parseAsset, ParsedAsset} from '../../models/parsed-asset';
import {
  DevicePlatform, parseDevicePlatform,
} from '../../models/device-platform';
import {OperatingSystem} from '../../models/operating-system';

@Component({
  selector: 'app-downloads',
  imports: [],
  templateUrl: './downloads.page.html',
  styleUrl: './downloads.page.css',
})
export class DownloadsPage {
  releases: Release[] = [];
  newestRelease: Release | null = null;
  bestAsset: ParsedAsset | null = null;

  constructor(private releaseService: ReleaseService) {
  }

  ngOnInit() {
    this.releaseService.getReleases().then(releases => {
      this.releases = releases.filter(r => r.published_at);
      for (const release of this.releases) {
        release.dc_included = release.tag_name >= 'v1.0.0';
      }
      this.newestRelease = this.releases[0];
      this.bestAsset = this.pickBestAsset();

      const descriptionDiv = document.getElementById(
        'description') as HTMLDivElement;
      descriptionDiv.innerHTML = this.newestRelease?.body_html || '';
    });
  }

  protected formatDate(date: string): string {
    return new Date(date).toLocaleDateString(navigator.language,
      {year: 'numeric', month: 'long', day: 'numeric'});
  }

  protected pickBestAsset(): ParsedAsset | null {
    if (!this.newestRelease) return null;

    const user = parseDevicePlatform();
    const parsed = this.newestRelease.assets.map(parseAsset).
      filter((a): a is ParsedAsset => a !== null);

    if (parsed.length === 0) return null;
    return parsed.map(
      asset => ({asset: asset, score: this.scoreAsset(asset, user)})).
      sort((a, b) => b.score - a.score)[0].asset;
  }

  private scoreAsset(asset: ParsedAsset, user: DevicePlatform): number {
    let score = 0;

    if (asset.os === user.os) score += 20;
    if (asset.arch === user.arch) score += 10;

    // Linux fallback
    if (user.os === OperatingSystem.Linux && asset.os ===
      OperatingSystem.Debian) score += 10;

    // Prefer native installers
    if (asset.ext === 'msi' || asset.ext === 'deb') score += 5;

    // Archives as fallback
    if (asset.ext === 'zip' || asset.ext === 'tar.gz') score += 1;

    return score;
  }
}
