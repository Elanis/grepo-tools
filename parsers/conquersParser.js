import fs from 'fs';
import path from 'path';

const ConquerCache = [];

function parseConquers() {
	if(ConquerCache.length > 1) {
		return;
	}

	const str = fs.readFileSync(path.join(path.resolve(), 'unzipped-files/conquers.txt'), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		ConquerCache.push({
			town_id: parseInt(words[0]),
			time: words[1],
			new_player_id: parseInt(words[2]),
			old_player_id: parseInt(words[3]),
			new_ally_id: parseInt(words[4]),
			old_ally_id: parseInt(words[5]),
			town_points: parseInt(words[6]),
		});
	}
}

export function getConquers() {
	parseConquers();

	return ConquerCache;
}

export function getConquer(id) {
	parseConquers();

	return ConquerCache[id];
}