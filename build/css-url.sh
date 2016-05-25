#!/bin/bash

ORIGINAL=/static/
REPLACE=./

cd www/static
sed -i "" "s#$ORIGINAL#$REPLACE#g" app.*.css
