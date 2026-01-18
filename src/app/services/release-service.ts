import {Injectable} from '@angular/core';
import {Service} from './service';
import {Release} from '../models/release';

@Injectable({
  providedIn: 'root',
})
export class ReleaseService extends Service {
  async getReleases(): Promise<Release[]> {
    const res = await this.get(
      'https://api.github.com/repos/borisonekenobi/DynoC-Docs/releases');
    if (!res.ok) {
      throw new Error(
        `GitHub releases request failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
  }
}
