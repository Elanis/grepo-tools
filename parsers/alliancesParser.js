import fs from 'fs';
import path from 'path';

const AllianceCache = [];

function parseAlliances() {
	if(AllianceCache.length > 1) {
		return;
	}

	const str = fs.readFileSync(path.join(path.resolve(), 'unzipped-files/alliances.txt'), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		const id = parseInt(words[0]);

		AllianceCache[id] = {
			id,
			name: words[1],
			points: parseInt(words[2]),
			villages: parseInt(words[3]),
			members: parseInt(words[4]),
			rank: parseInt(words[5]),
		};
	}
}

export function getAlliances() {
	parseAlliances();

	return AllianceCache;
}

export function getAlliance(id) {
	parseAlliances();

	return AllianceCache[id];
}