var map;
var infowindow;
var newInfo;
var directionDisplay;
var directionsService;
var marker;
var markersArray = [];

function initMap() {
    console.log("Map is here");
    var sanFran = {lat: 37.774235, lng: -122.420780};
    map = new google.maps.Map(document.getElementById('map'), {
      center: sanFran,
      scrollwheel: false,
      zoom: 14
  });

  // directionsDisplay = new google.maps.DirectionsRenderer();
  //   directionsDisplay.setMap(map);
  //
  //
  //     directionsService = new google.maps.DirectionsService();
  //     marker = new google.maps.Marker();
  //     markersArray.push(marker);
//    google.maps.event.addListener(map, 'click', function(event) {
// 	placeMarker(map, event.latLng);
// });
};



function fx(latLng) {
    marker.setMap(null);

    var request = {
        origin:latLng,
        destination:latLng,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        var point = response.routes[0].legs[0];

        marker.setOptions({
          map:map,
          position:point.start_location
        });

        var currentPoint = (point.start_location.toString());
        var currentLocation = currentPoint.split('(')[1].split(')')[0].split(',');

        var current_lat = parseFloat(currentLocation[0]);
        var current_long = parseFloat(currentLocation[1]);
        // console.log(current_lat.toFixed(5));
        // console.log(current_long.toFixed(5));

        for(var i = 0; i < points.length; i++){
          if(points[i][0].toFixed(3) == current_lat.toFixed(3) && points[i][1].toFixed(3) == current_long.toFixed(3)) {
            {
            content: 'Days: ' + days[i] + '<br> Hours: ' + hours[i] + '<br> Hour Limit: ' + hour_limits[i] + '<br> Free Parking after: ' + end_time[i]
            };
            // infowindow.open(map, marker);
          }
          else{
            console.log('false')
          }
        }

        map.setCenter(point.start_location);

      var infowindow = new google.maps.InfoWindow({
          content: response.routes[0].summary
      });
      infowindow.open(map, marker);

      var circle = new google.maps.Circle({
        map: map,
        radius: 800,
        fillColor: 'transparent'
      });
      circle.bindTo('center', marker, 'position');
      }
    });
};

function clearOverlays() {
for (var i = 0; i < markersArray.length; i++) {
  markersArray[i].setMap(null);
}
markersArray = [];
};

// 	var infowindow = new google.maps.InfoWindow({
// 					content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
// 			});
// 			infowindow.open(map, marker);

// 			var circle = new google.maps.Circle({
// 		map: map,
// 		radius: 820,
// 		fillColor: 'transparent'
// 	});
// 	circle.bindTo('center', marker, 'position');
// 	}
