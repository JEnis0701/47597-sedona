//карта


$(function(){

	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [34.86947625, -111.76029326],
            zoom: 11
        });

        myMap.controls
        	.remove('zoomControl');

        myMap.behaviors.disable([
        	'drag',
        	'scrollZoom'
        ]);

        myPlacemark = new ymaps.Placemark([34.87195183, -111.75626900], { 
        			  hintContent: 'Седона', 
        			  balloonContent: 'США'
         });
        myMap.geoObjects.add(myPlacemark);
    }
});