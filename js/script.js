


var pizzaIcon = L.icon({
	iconUrl: 'images/pizza.png',

		iconSize: [32, 37],
		shadowSize: [50, 64],
		shadowAnchor: [4, 62],
		popupAnchor: [-3, -76]

});

var beerIcon = L.icon({
	iconUrl: 'images/bar.png',

		iconSize: [32, 37],
		shadowSize: [50, 64],
		shadowAnchor: [4, 62],
		popupAnchor: [-3, -76]

});


var WeatherUp = L.marker([40.679855, -73.967743], {icon:beerIcon}).bindPopup("Weather Up");
var BklynSocial = L.marker([40.680405, -73.994415], {icon:beerIcon}).bindPopup("Brooklyn Social");
var	WXOU = L.marker([40.7353829, -74.0059682], {icon:beerIcon}).bindPopup("Radio Bar");
var	Sophies = L.marker([40.724842, -73.983788], {icon:beerIcon}).bindPopup("Sophie's");
var	DutchKills = L.marker([40.7478994, -73.9401146], {icon:beerIcon}).bindPopup("Dutch Kill's");

var bars = L.layerGroup([WeatherUp, BklynSocial, WXOU, Sophies, DutchKills]);

var Johns = L.marker([40.7315956, -74.0032746], {icon: pizzaIcon}).bindPopup("John's of Bleecker Street"),
	JoePat = L.marker([40.6130654, -74.1221964], {icon: pizzaIcon}).bindPopup("Joe and Pat's"),
	LandB = L.marker([40.5944187, -73.9812993], {icon: pizzaIcon}).bindPopup("L&B Spumoni Gardens"),
	Zero = L.marker([40.8546312, -73.8884278], {icon: pizzaIcon}).bindPopup("Zero Otto Nove"),
	Speedy = L.marker([40.687481,  -73.96006], {icon: pizzaIcon}).bindPopup("Speedy Romeo's");

var pizza = L.layerGroup([Johns, JoePat, LandB, Zero, Speedy]);

var overlays = {
	"Bars" : bars,
	"Pizza": pizza
};

var map = L.map('map', { 
	center:[40.7820015, -73.8317032],
	zoom: 	10,
	layers: pizza
});


L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

layerControl = L.control.layers(null, overlays, {
	position: 'bottomright',
	collapsed: false
});

layerControl.addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>"Best Pizza and Bars in NYC"</h4>'

};

info.addTo(map);

