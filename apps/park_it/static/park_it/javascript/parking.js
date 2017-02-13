var permit = [];
var days = [];
var hours = [];
var start_time = [];
var end_time = [];
var hour_limits = [];
var points = [];

$(document).ready(function(){
	$.get("https://data.sfgov.org/api/views/2ehv-6arf/rows.json", function(res) {
		for(var i = 0; i < (res.data.length); i++) {
			permit.push(res.data[i][9]);
			days.push(res.data[i][10]);
			hours.push(res.data[i][11]);
			start_time.push(res.data[i][12]);
			end_time.push(res.data[i][13]);
			hour_limits.push(res.data[i][17]);
			coordinates = res.data[i][19];

			if(coordinates !== null){
				var data = coordinates.split('LINESTRING ')[1].split('(')[1].split(')')[0].split(',')
				var point = data[0].split(' ')
				var longitude = parseFloat(point[0]);
				var latitude = parseFloat(point[1]);
				points.push([latitude, longitude]);
			}
		}
	}, "json");
});
