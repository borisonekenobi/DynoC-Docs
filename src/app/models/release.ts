import {SimpleUser} from './simple-user';
import {ReleaseAsset} from './release-asset';
import {ReactionRollup} from './reaction-rollup';

/**
 * A release.
 */
export interface Release {
  url: string;
  html_url: string;
  assets_url: string;
  upload_url: string;
  tarball_url: string | null;
  zipball_url: string | null;
  id: number;
  node_id: string;
  /**
   * The name of the tag.
   */
  tag_name: string;
  /**
   * Specifies the commitish value that determines where the Git tag is created from.
   */
  target_commitish: string;
  name: string | null;
  body?: string | null;
  /**
   * true to create a draft (unpublished) release; false to create a published one.
   */
  draft: boolean;
  /**
   * Whether to identify the release as a prerelease or a full release.
   */
  prerelease: boolean;
  /**
   * Whether or not the release is immutable.
   */
  immutable?: boolean;
  created_at: string;
  published_at: string | null;
  updated_at?: string | null;
  author: SimpleUser;
  assets: ReleaseAsset[];
  body_html?: string;
  body_text?: string;
  mentions_count?: number;
  /**
   * The URL of the release discussion.
   */
  discussion_url?: string;
  reactions?: ReactionRollup;
  /**
   * Whether dc is included in the download.
   */
  dc_included?: boolean;
}
