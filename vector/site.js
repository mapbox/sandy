// For comprehensive documentation on Polymaps see http://polymaps.org/

var po = org.polymaps;

// Create a map.
var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .add(po.interact())
    .add(po.hash())
    .center({lat: 37.194, lon: -71.946})
    .zoom(5);

// Add MapBox streets. You can get one here: http://mapbox.com/plans/
map.add(po.image()
    .url(po.url("http://{S}tiles.mapbox.com/v3/lxbarth.map-k77nz5ym/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", "d."])));

// Render hurricane projection cone.
map.add(po.geoJson()
    .id('cone')
    .url("data/geojson/al182012.017A_5day_pgn.json")
    .tile(false));

// Render projected path.
map.add(po.geoJson()
    .id('lines')
    .url("data/geojson/al182012.017A_5day_lin.json")
    .tile(false));

// Render time points.
map.add(po.geoJson()
    .id('points')
    .url("data/geojson/al182012.017A_5day_ptn.json")
    .tile(false)
    .on('load', function(data) {
        // Peel out date and wind speed and stick it into a label.
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

// Render coastal warnings.
map.add(po.geoJson()
    .id('warnings')
    .url("data/geojson/al182012.017A_ww_wwlin.json")
    .tile(false)
    .on('load', function(data) {
        // Use the warning level as a class for styling.
        for (i in data.features) {
            var f = data.features[i];
            f.element.setAttribute('class', f.data.properties.TCWW.toLowerCase())
        }
    }));

// Now place zoomer on top of everything.
map.add(po.compass()
    .pan("none"));
