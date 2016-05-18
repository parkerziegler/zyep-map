var pgStyle = ({
    radius: 5,
	fillColor: "#F1D477",
    color: "#FFFFFF",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
});

var pgMarker = L.MakiMarkers.icon({
    icon: "school",
    color: "#009AFF",
    size: "s"
});

var playgrounds = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "Name": "Black Rock 1", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.787989995398789, 35.089232299887087, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Black Rock 2", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.782703276523662, 35.082062488231081, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Cottonwood Circle", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.779062726823781, 35.082321707567232, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Black Rock 3", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.779866315744698, 35.079376930388044, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Shiwi Tsana", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.85021431840886, 35.072620429700649, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Old Sub Open Space", "Number": 1 }, "geometry": { "type": "Point", "coordinates": [ -108.85824973040161, 35.059626293051025, 0.0 ] } }
]
}