var lmStyle = {
    radius: 5,
	fillColor: "#ff7800",
    color: "#fff",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var communityMarker = L.MakiMarkers.icon({
    icon: "village",
    color: "#CC0F00",
    size: "s"
});

var schoolMarker = L.MakiMarkers.icon({
    icon: "library",
    color: "#004099",
    size: "s"
});

var gardenMarker = L.MakiMarkers.icon({
    icon: "garden",
    color: "#82FF7A",
    size: "s"
});

var hospitalMarker = L.MakiMarkers.icon({
    icon: "hospital",
    color: "#000000",
    size: "s"
});

var parkMarker = L.MakiMarkers.icon({
    icon: "park",
    color: "#277342",
    size: "s"
});

var landmarks = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "Name": "Four Way", "Descriptio": "Zuni's Main Street project centers around this location.", "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.85140570608219, 35.068605935222109 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Tribal Building", "Descriptio": null, "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.846168083982931, 35.070456346970957 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Middle School", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.839272368204703, 35.075049465832429 ] } },
{ "type": "Feature", "properties": { "Name": "Halona Plaza", "Descriptio": null, "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.851143338106525, 35.065417509191789 ] } },
{ "type": "Feature", "properties": { "Name": "DY Elementary", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.848360668053076, 35.063682742013263 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Christian Mission School", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.850473273050909, 35.065978726019019 ] } },
{ "type": "Feature", "properties": { "Name": "St Anthony's School", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.852368376174283, 35.07178386024561 ] } },
{ "type": "Feature", "properties": { "Name": "Twin Buttes High School", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.851646617695394, 35.071839738072718 ] } },
{ "type": "Feature", "properties": { "Name": "Summer Camp Garden", "Descriptio": null, "Type": "Garden", "Number": 3 }, "geometry": { "type": "Point", "coordinates": [ -108.850999230599143, 35.071614629498974 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Wellness Center", "Descriptio": null, "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.84811097901563, 35.072288357105293 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni High School", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.804963500588329, 35.082030447158566 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni IHS Hospital", "Descriptio": null, "Type": "Hospital", "Number": 4 }, "geometry": { "type": "Point", "coordinates": [ -108.791162315901715, 35.08724703495318 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Head Start", "Descriptio": null, "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.825836939650031, 35.064865071355023 ] } },
{ "type": "Feature", "properties": { "Name": "Zuni Senior Center", "Descriptio": null, "Type": "Community", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.815051533602087, 35.074559353989912 ] } },
{ "type": "Feature", "properties": { "Name": "Future Zuni Veteran's Park", "Descriptio": null, "Type": "Park", "Number": 5 }, "geometry": { "type": "Point", "coordinates": [ -108.813529989638624, 35.074494697217986 ] } },
{ "type": "Feature", "properties": { "Name": "New Elementary School", "Descriptio": "To open 2016", "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.808738099469466, 35.077538294111257 ] } },
{ "type": "Feature", "properties": { "Name": "A:shiwi Elementary", "Descriptio": null, "Type": "School", "Number": 2 }, "geometry": { "type": "Point", "coordinates": [ -108.824450969696187, 35.077124825677707 ] } }
]
}