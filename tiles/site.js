
// For comprehensive documentation on mapbox.js see http://mapbox.com/mapbox.js
mapbox.auto('map', 'villeda.map-9wjr0zn9', function(map, o) {

    // Set up map.
    map.ui.hash.add();
    map.ui.fullscreen.add();
    map.ui.legend.add();
    map.ui.refresh();

    // Set location if no hash is present.
    !document.location.hash &&
        map.zoom(5).center({lat: 37.194, lon: -71.946});
});
