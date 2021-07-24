import { getAlliances, getAlliance } from './parsers/alliancesParser.js';
import { getConquers, getConquer } from './parsers/conquersParser.js';
import { getIslands, getIsland } from './parsers/islandParser.js';
import { getPlayers, getPlayer } from './parsers/playersParser.js';
import {
	getPlayersKillsAll, getPlayerKillsAll,
	getPlayersKillsAtt, getPlayerKillsAtt,
	getPlayersKillsDef, getPlayerKillsDef,
	getAlliancesKillsAll, getAllianceKillsAll,
	getAlliancesKillsAtt, getAllianceKillsAtt,
	getAlliancesKillsDef, getAllianceKillsDef,
} from './parsers/ranksParser.js';
import { getTowns, getTown } from './parsers/townParser.js';

const PLAYER_NAME = 'WRITE HERE';

console.log('Initializing app ...');

const player = getPlayers().filter((elt) => {
	return elt.name === PLAYER_NAME;
})[0];

console.log('Got player ' + player.name + ' !');

const isAlliedTown = (town) => town.owner && town.owner.alliance_id === player.alliance_id;

const islandsList = getIslands().filter((island, index) => {
	const townsList = getTowns().filter((town) => {
		const owner = getPlayer(town.player_id);

		town.owner = owner;

		return town.island_x === island.x && town.island_y === island.y;
	});

	island.towns = townsList;
	island.allianceAmount = island.towns.filter(isAlliedTown).length;
	island.alliancePossessionPercentage = island.allianceAmount / (island.towns.length + island.available_towns);

	if(index%10000 === 0) {
		console.log('Island #' + index);
	}

	return island.allianceAmount > 0;
});

islandsList.sort((a, b) => {
	if(a.alliancePossessionPercentage > b.alliancePossessionPercentage) {
		return -1;
	} else 	if(a.alliancePossessionPercentage === b.alliancePossessionPercentage) {
		return 0;
	}

	return 1;
});

/**
 * Draw table
 */

console.log('[table]');
console.log('[**]Mer[||]Ile[||]Villes alliées[||]Villes non alliées[||]Slots[/**]');


for(let i = 0; i < 15; i++) {
	const island = islandsList[i];

	if(!island) {
		break;
	}

	const sea = Math.floor(island.x / 100).toString() + Math.floor(island.y / 100).toString();

	console.log(`[*]${sea}[|][island]${island.id}[/island][|]${island.allianceAmount}[|]${(island.towns.length - island.allianceAmount)}[|]${island.available_towns}[/*]`);
}

console.log('[/table]');