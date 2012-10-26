var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .add(po.interact())
    .add(po.hash())
    .center({lat: 37.194, lon: -71.946})
    .zoom(5);

map.add(po.image()
    .url(po.url("http://{S}tiles.mapbox.com/v3/lxbarth.map-k77nz5ym/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", "d."])));

4.96/37.194/-71.946

// Cone
map.add(po.geoJson()
    .id('cone')
    .url("data/geojson/al182012.017A_5day_pgn.json")
    .tile(false));

// Line
map.add(po.geoJson()
    .id('lines')
    .url("data/geojson/al182012.017A_5day_lin.json")
    .tile(false));

// Points
map.add(po.geoJson()
    .id('points')
    .url("data/geojson/al182012.017A_5day_ptn.json")
    .tile(false)
    .on('load', function(data) {
        for (i in data.features) {
            var f      = data.features[i];
            var text   = po.svg('text');
            text.setAttribute('transform', f.element.getAttribute('transform') + ' translate(5, 5)');
            text.appendChild(document.createTextNode(
                f.data.properties.DATELBL + ' (' + f.data.properties.MAXWIND + ' mph)'
            ));
            f.element.parentNode.appendChild(text);
            f.element.setAttribute('r', 3);
        }
    }));

// Coastal warnings
map.add(po.geoJson()
    .id('warnings')
    .url("data/geojson/al182012.017A_ww_wwlin.json")
    .tile(false)
    .on('load', function(data) {
        for (i in data.features) {
            var f = data.features[i];
            f.element.setAttribute('class', f.data.properties.TCWW.toLowerCase())
        }
    }));

// Compass
map.add(po.compass()
    .pan("none"));
