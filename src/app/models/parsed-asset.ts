import {Architecture, parseArchitecture} from './architecture';
import {OperatingSystem, parseOperatingSystem} from './operating-system';
import {ReleaseAsset} from './release-asset';

export interface ParsedAsset {
  product: string;
  os: OperatingSystem;
  arch: Architecture;
  ext: string;
  url: string;
}

export function parseAsset(releaseAsset: ReleaseAsset): ParsedAsset | null {
  const tarGz = releaseAsset.name.endsWith('.tar.gz');

  const ext = tarGz
    ? 'tar.gz'
    : releaseAsset.name.split('.').pop()!;

  const base = tarGz
    ? releaseAsset.name.slice(0, -7)
    : releaseAsset.name.slice(0, -(ext.length + 1));

  const parts = base.split('-');
  if (parts.length < 3) return null;

  const [name, os, arch] = parts;

  return {
    product: name,
    os: parseOperatingSystem(os),
    arch: parseArchitecture(arch),
    ext: ext,
    url: releaseAsset.browser_download_url,
  } as ParsedAsset;
}
