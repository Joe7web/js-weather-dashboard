
var apiKey = "c6d3bbeff16dae79f9c1ce09f526c2ee";

var city

var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q= city '&appid' =apiKey";

fetch(quesryUrl)
 .then(function(response) {
     return response.json(
 })
 .then(function(data) {
     console.log(data);
 });
 
     