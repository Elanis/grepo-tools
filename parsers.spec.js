import assert from 'assert';

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

import { ALLY_ID, ALLY_ID_INVALID, CONQUER_ID, CONQUER_ID_INVALID, ISLAND_ID, ISLAND_ID_INVALID, PLAYER_ID, PLAYER_ID_INVALID, TOWN_ID, TOWN_ID_INVALID } from './config.js';

it('AlliancesKillsAll', () => {
	assert.notEqual(typeof getAlliancesKillsAll(), 'undefined');
	assert.notEqual(typeof getAlliancesKillsAll(), 'undefined');
	assert.notEqual(typeof getAllianceKillsAll(ALLY_ID), 'undefined');
	assert.equal(typeof getAllianceKillsAll(ALLY_ID_INVALID), 'undefined');
});

it('AlliancesKillsAtt', () => {
	assert.notEqual(typeof getAlliancesKillsAtt(), 'undefined');
	assert.notEqual(typeof getAlliancesKillsAtt(), 'undefined');
	assert.notEqual(typeof getAllianceKillsAtt(ALLY_ID), 'undefined');
	assert.equal(typeof getAllianceKillsAtt(ALLY_ID_INVALID), 'undefined');
});

it('AlliancesKillsDef', () => {
	assert.notEqual(typeof getAlliancesKillsDef(), 'undefined');
	assert.notEqual(typeof getAlliancesKillsDef(), 'undefined');
	assert.notEqual(typeof getAllianceKillsDef(ALLY_ID), 'undefined');
	assert.equal(typeof getAllianceKillsDef(ALLY_ID_INVALID), 'undefined');
});

it('Alliances', () => {
	assert.notEqual(typeof getAlliances(), 'undefined');
	assert.notEqual(typeof getAlliances(), 'undefined');
	assert.notEqual(typeof getAlliance(ALLY_ID), 'undefined');
	assert.equal(typeof getAlliance(ALLY_ID_INVALID), 'undefined');
});

it('Conquers', () => {
	assert.notEqual(typeof getConquers(), 'undefined');
	assert.notEqual(typeof getConquers(), 'undefined');
	assert.notEqual(typeof getConquer(CONQUER_ID), 'undefined');
	assert.equal(typeof getConquer(CONQUER_ID_INVALID), 'undefined');
});

it('Islands', () => {
	assert.notEqual(typeof getIslands(), 'undefined');
	assert.notEqual(typeof getIslands(), 'undefined');
	assert.notEqual(typeof getIsland(ISLAND_ID), 'undefined');
	assert.equal(typeof getIsland(ISLAND_ID_INVALID), 'undefined');
});

it('Players', () => {
	assert.notEqual(typeof getPlayers(), 'undefined');
	assert.notEqual(typeof getPlayers(), 'undefined');
	assert.notEqual(typeof getPlayer(PLAYER_ID), 'undefined');
	assert.equal(typeof getPlayer(PLAYER_ID_INVALID), 'undefined');
});

it('PlayersKillsAll', () => {
	assert.notEqual(typeof getPlayersKillsAll(), 'undefined');
	assert.notEqual(typeof getPlayersKillsAll(), 'undefined');
	assert.notEqual(typeof getPlayerKillsAll(PLAYER_ID), 'undefined');
	assert.equal(typeof getPlayerKillsAll(PLAYER_ID_INVALID), 'undefined');
});

it('PlayersKillsAtt', () => {
	assert.notEqual(typeof getPlayersKillsAtt(), 'undefined');
	assert.notEqual(typeof getPlayersKillsAtt(), 'undefined');
	assert.notEqual(typeof getPlayerKillsAtt(PLAYER_ID), 'undefined');
	assert.equal(typeof getPlayerKillsAtt(PLAYER_ID_INVALID), 'undefined');
});

it('PlayersKillsDef', () => {
	assert.notEqual(typeof getPlayersKillsDef(), 'undefined');
	assert.notEqual(typeof getPlayersKillsDef(), 'undefined');
	assert.notEqual(typeof getPlayerKillsDef(PLAYER_ID), 'undefined');
	assert.equal(typeof getPlayerKillsDef(PLAYER_ID_INVALID), 'undefined');
});

it('Towns', () => {
	assert.notEqual(typeof getTowns(), 'undefined');
	assert.notEqual(typeof getTowns(), 'undefined');
	assert.notEqual(typeof getTown(TOWN_ID), 'undefined');
	assert.equal(typeof getTown(TOWN_ID_INVALID), 'undefined');
});