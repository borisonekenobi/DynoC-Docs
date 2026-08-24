import {Service} from '@angular/core';
import {Release} from '../models/release';

@Service()
export class ReleaseService {
	public async getReleases(): Promise<Release[]> {
		const res = await fetch(
			'https://api.github.com/repos/borisonekenobi/DynoC-Docs/releases', {
				method: 'GET',
				headers: {
					Accept: 'application/vnd.github.html+json',
					'X-GitHub-Api-Version': '2022-11-28',
				},
			});

		if (!res.ok) {
			throw new Error(
				`GitHub releases request failed: ${res.status} ${res.statusText}`);
		}

		return res.json();
	}
}
