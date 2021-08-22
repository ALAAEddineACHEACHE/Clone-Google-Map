mapboxgl.accessToken = 
'pk.eyJ1IjoiYWxhZWUiLCJhIjoiY2tzbmYzNnl1MDd3eDJwbnA3aTdyajUydSJ9.yMDR9hhKxxn_VF4AJpVfsg';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})
var MapboxDirections = require('@mapbox/mapbox-gl-directions');
function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(){
    setupMap([31.79,-7.09])
}
function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:14
        });
    const navigator = new mapboxgl.NavigationControl();
    map.addControl(navigator);     
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      map.addControl(directions,"top-left");
}



    
