import fs from 'fs';
import path from 'path';

const TownCache = [];

function parseTowns() {
	if(TownCache.length > 1) {
		return;
	}

	const str = fs.readFileSync(path.join(path.resolve(), 'unzipped-files/Towns.txt'), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		const id = parseInt(words[0]);
		TownCache[id] = {
			id,
			name: words[1],
			alliance_id: parseInt(words[2]),
			points: parseInt(words[3]),
			rank: parseInt(words[4]),
			towns: parseInt(words[6]),
		};
	}
}

export function getTowns() {
	parseTowns();

	return TownCache;
}

export function getTown(id) {
	parseTowns();

	return TownCache[id];
}