import fs from 'fs';
import path from 'path';

const PlayerCache = [];

function parsePlayers() {
	if(PlayerCache.length > 1) {
		return;
	}

	const str = fs.readFileSync(path.join(path.resolve(), 'unzipped-files/players.txt'), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		const id = parseInt(words[0]);
		PlayerCache[id] = {
			id,
			name: words[1],
			alliance_id: parseInt(words[2]),
			points: parseInt(words[3]),
			rank: parseInt(words[4]),
			towns: parseInt(words[6]),
		};
	}
}

export function getPlayers() {
	parsePlayers();

	return PlayerCache;
}

export function getPlayer(id) {
	parsePlayers();

	return PlayerCache[id];
}