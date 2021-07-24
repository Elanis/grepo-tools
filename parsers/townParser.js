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
			player_id: parseInt(words[1]),
			name: words[2],
			island_x: parseInt(words[3]),
			island_y: parseInt(words[4]),
			number_on_island: parseInt(words[5]),
			points: parseInt(words[6]),
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