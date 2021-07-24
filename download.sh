#!/usr/bin/env bash
set -euo pipefail

world='fr137'

mkdir -p txtgz-files/

wget "http://$world.grepolis.com/data/players.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/alliances.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/towns.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/islands.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/player_kills_all.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/player_kills_att.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/player_kills_def.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/alliance_kills_all.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/alliance_kills_att.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/alliance_kills_def.txt.gz" -P txtgz-files/
wget "http://$world.grepolis.com/data/conquers.txt.gz" -P txtgz-files/