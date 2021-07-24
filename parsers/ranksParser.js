import fs from 'fs';
import path from 'path';

let player_kills_all = [];
let player_kills_att = [];
let player_kills_def = [];

let alliance_kills_all = [];
let alliance_kills_att = [];
let alliance_kills_def = [];

function parseRankFile(file) {
	const data = [];

	const str = fs.readFileSync(path.join(path.resolve(), file), 'UTF-8');
	for(const line of str.split('\n')) {
		if(line === '') {
			continue;
		}

		const words = line.split(',');

		const id = parseInt(words[1]);

		data[id] = {
			id,
			rank: parseInt(words[0]),
			points: parseInt(words[2]),
		};
	}

	return data;
}

function parseRanks() {
	if(player_kills_all.length > 1) {
		return;
	}

	player_kills_all = parseRankFile('unzipped-files/player_kills_all.txt');
	player_kills_att = parseRankFile('unzipped-files/player_kills_att.txt');
	player_kills_def = parseRankFile('unzipped-files/player_kills_def.txt');

	alliance_kills_all = parseRankFile('unzipped-files/alliance_kills_all.txt');
	alliance_kills_att = parseRankFile('unzipped-files/alliance_kills_att.txt');
	alliance_kills_def = parseRankFile('unzipped-files/alliance_kills_def.txt');
}

export function getPlayersKillsAll() {
	parseRanks();

	return player_kills_all;
}

export function getPlayerKillsAll(id) {
	parseRanks();

	return player_kills_all[id];
}

export function getPlayersKillsAtt() {
	parseRanks();

	return player_kills_att;
}

export function getPlayerKillsAtt(id) {
	parseRanks();

	return player_kills_att[id];
}

export function getPlayersKillsDef() {
	parseRanks();

	return player_kills_def;
}

export function getPlayerKillsDef(id) {
	parseRanks();

	return player_kills_def[id];
}

export function getAlliancesKillsAll() {
	parseRanks();

	return alliance_kills_all;
}

export function getAllianceKillsAll(id) {
	parseRanks();

	return alliance_kills_all[id];
}

export function getAlliancesKillsAtt() {
	parseRanks();

	return alliance_kills_att;
}

export function getAllianceKillsAtt(id) {
	parseRanks();

	return alliance_kills_att[id];
}

export function getAlliancesKillsDef() {
	parseRanks();

	return alliance_kills_def;
}

export function getAllianceKillsDef(id) {
	parseRanks();

	return alliance_kills_def[id];
}