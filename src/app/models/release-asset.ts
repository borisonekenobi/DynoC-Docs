import {SimpleUser} from './simple-user';

/**
 * Data related to a release.
 */
export interface ReleaseAsset {
  url: string;
  browser_download_url: string;
  id: number;
  node_id: string;
  /**
   * The file name of the asset.
   */
  name: string;
  label: string | null;
  /**
   * State of the release asset.
   */
  state: 'uploaded' | 'open';
  content_type: string;
  size: number;
  digest: string | null;
  download_count: number;
  created_at: string;
  updated_at: string;
  uploader: SimpleUser | null;
}
