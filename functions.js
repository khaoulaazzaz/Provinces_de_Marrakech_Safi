var sliderControl = null
var mymap = L.map('mapid').setView([31.61319, -8.480813], 7)
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap)

function getColor(e) {
  return e > 500
    ? '#041C32'
    : e > 400
    ? '#04293A'
    : e > 300
    ? '#35858B'
    : e > 200
    ? '#4FBDBA'
    : e > 100
    ? '#AEFEFF'
    : '#B8E4F0'
}

custom_style = {
  weight: 2,
  opacity: 1,
  color: 'black',
  dashArray: '3',
  fillOpacity: 0.7,
}

function style_cas19(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas19_1_22)
  return custom_style
}
function style_cas18(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas18_1_22)
  return custom_style
}
function style_cas17(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas17_1_22)
  return custom_style
}
function style_cas16(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas16_1_22)
  return custom_style
}
function style_cas15(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas15_1_22)
  return custom_style
}
function style_cas14(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas14_1_22)
  return custom_style
}
function style_cas13(feature) {
  custom_style['fillColor'] = getColor(feature.properties.Cas13_1_22)
  return custom_style
}

function highlightFeature(e) {
  var layer = e.target

  layer.setStyle({
    weight: 5,
    color: '#000',
    dashArray: '',
    fillOpacity: 0.7,
  })
}
function zoomToFeature(e) {
  mymap.fitBounds(e.target.getBounds())
}

var geojson1

function resetHighlight1(e) {
  geojson1.resetStyle(e.target)
}

function onEachFeature1(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight1,
    click: zoomToFeature,
  })
}

geojson1 = L.geoJson(NouveauxCas, {
  style: style_cas13,
  onEachFeature: onEachFeature1,
  time: 'Le 13/1/2022',
})
var geojson2

function resetHighlight2(e) {
  geojson2.resetStyle(e.target)
}

function onEachFeature2(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight2,
    click: zoomToFeature,
  })
}
geojson2 = L.geoJson(NouveauxCas, {
  style: style_cas14,
  onEachFeature: onEachFeature2,
  time: 'Le 14/1/2022',
})
var geojson3

function resetHighlight3(e) {
  geojson3.resetStyle(e.target)
}
function onEachFeature3(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight3,
    click: zoomToFeature,
  })
}

geojson3 = L.geoJson(NouveauxCas, {
  style: style_cas15,
  onEachFeature: onEachFeature3,
  time: 'Le 15/1/2022',
})

var geojson4
function resetHighlight4(e) {
  geojson4.resetStyle4(e.target)
}
function onEachFeature4(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight4,
    click: zoomToFeature,
  })
}

geojson4 = L.geoJson(NouveauxCas, {
  style: style_cas16,
  onEachFeature: onEachFeature4,
  time: 'Le 16/1/2022',
})

var geojson5

function resetHighlight5(e) {
  geojson5.resetStyle(e.target)
}
function onEachFeature5(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight5,
    click: zoomToFeature,
  })
}
geojson5 = L.geoJson(NouveauxCas, {
  style: style_cas17,
  onEachFeature: onEachFeature5,
  time: 'Le 17/1/2022',
})
var geojson6

function resetHighlight6(e) {
  geojson6.resetStyle(e.target)
}
function onEachFeature6(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight6,
    click: zoomToFeature,
  })
}
geojson6 = L.geoJson(NouveauxCas, {
  style: style_cas18,
  onEachFeature: onEachFeature6,
  time: 'Le 18/1/2022',
})

var geojson7
function resetHighlight7(e) {
  geojson7.resetStyle(e.target)
}
function onEachFeature7(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight7,
    click: zoomToFeature,
  })
}
geojson7 = L.geoJson(NouveauxCas, {
  style: style_cas19,
  onEachFeature: onEachFeature7,
  time: 'Le 19/1/2022',
})

layerGroup = L.layerGroup([
  geojson1,
  geojson2,
  geojson3,
  geojson4,
  geojson5,
  geojson6,
  geojson7,
])

var sliderControl = L.control.sliderControl({ layer: layerGroup, follow: true })
mymap.addControl(sliderControl)
sliderControl.startSlider()

var legend = L.control({ position: 'bottomleft' })

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 100, 200, 300, 400, 500]

  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+')
  }

  return div
}

legend.addTo(mymap)
