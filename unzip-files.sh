#!/usr/bin/env bash
set -euo pipefail

rm -rf unzipped-files/
mkdir -p unzipped-files/

cp -R txtgz-files/. unzipped-files/

for i in unzipped-files/*; do
	echo "$i"
	gzip -d "$i" 
done
