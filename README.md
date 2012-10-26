# Hurricane Sandy

Visualizing Hurricane Sandy with NHC data.

- [Blog post](http://mapbox.com/blog/mapping-sandy)

This repository contains two demos for working with NHC data:

- A tile maps using TileMill
- A vector map using ogr2ogr and Polymap

## Tile Map

[http://mapbox.com/sandy/tiles](http://mapbox.com/sandy/tiles)

- Use [TileMill](http://mapbox.com/tilemill/) to render NHC shapefiles
- Use [mapbox.js](http://mapbox.com/mapbox.js/api/v0.6.6/) to display tile layer together with [MapBox Streets](https://tiles.mapbox.com/mapbox/map/mapbox-streets).

## Vector Map

[http://mapbox.com/sandy/vector](http://mapbox.com/sandy/vector)

- Convert shapefiles to geojson with [GDAL's ogr2ogr](http://www.gdal.org/)
- Use Polymaps to render geojson on top of [MapBox Streets](https://tiles.mapbox.com/mapbox/map/mapbox-streets).

## Data

Weather data is from the National Hurricane Center (NHC). Map data is from [OpenStreetMap](http://www.openstreetmap.org/).

- http://www.nhc.noaa.gov/gis/
- http://www.nhc.noaa.gov/gis/forecast/archive/al182012_5day_latest.zip
