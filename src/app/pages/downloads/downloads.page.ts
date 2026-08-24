import {
	AfterViewInit,
	Component,
	inject,
	Signal,
	viewChild,
} from '@angular/core';
import {Release} from '../../models/release';
import {parseAsset, ParsedAsset} from '../../models/parsed-asset';
import {ReleaseService} from '../../services/release-service';
import {
	DevicePlatform,
	parseDevicePlatform,
} from '../../models/device-platform';
import {OperatingSystem} from '../../models/operating-system';

@Component({
	imports: [],
	selector: 'app-downloads',
	styleUrl: './downloads.page.css',
	templateUrl: './downloads.page.html',
})
export class DownloadsPage implements AfterViewInit {
	protected releases: Release[] = [];
	protected newestRelease: Release | null = null;
	protected bestAsset: ParsedAsset | null = null;

	private descriptionDiv: Signal<HTMLDivElement> = viewChild.required(
		'description');

	private releaseService: ReleaseService = inject(ReleaseService);

	public ngAfterViewInit() {
		this.releaseService.getReleases().then((releases) => {
			this.releases = releases.filter((r) => r.published_at);
			for (const release of this.releases) {
				release.dc_included = release.tag_name >= 'v1.0.0';
			}
			this.newestRelease = this.releases[0];
			this.bestAsset = this.pickBestAsset();
			this.descriptionDiv().innerHTML = this.newestRelease?.body_html ||
				'';
		});
	}

	protected formatDate(date: string): string {
		return new Date(date).toLocaleDateString(navigator.language, {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	private pickBestAsset(): ParsedAsset | null {
		if (!this.newestRelease) return null;

		const user = parseDevicePlatform();
		const parsed = this.newestRelease.assets.map(parseAsset).
			filter((asset): asset is ParsedAsset => asset !== null);

		if (parsed.length === 0) return null;
		return parsed.map(
			(asset) => ({asset: asset, score: this.scoreAsset(asset, user)})).
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
