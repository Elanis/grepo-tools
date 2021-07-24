import fs from 'fs';
import path from 'path';

const islandCache = [];

function parseIslands() {
	if(islandCache.length > 1) {
		return;
	}

	const str = fs.readFileSync(path.join(path.resolve(), 'unzipped-files/islands.txt'), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		const id = parseInt(words[0]);

		islandCache[id] = {
			id,
			x: parseInt(words[1]),
			y: parseInt(words[2]),
			islandType: parseInt(words[3]),
			available_towns: parseInt(words[4]),
			major_resource: words[5],
			minor_resource: words[6],
		};
	}
}

export function getIslands() {
	parseIslands();

	return islandCache;
}

export function getIsland(id) {
	parseIslands();

	return islandCache[id];
}