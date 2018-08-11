const request = require('request');
const argv = require('yargs').argv

let apiKey = 'f2ca8b2d2cca9b6c22ee5648c75a41d7'
let city = argv.c || 'houston';
let url = `http://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${apiKey}&units=imperial`;


request(url, function( err, response, body) {
  let weather = JSON.parse(body);
  let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
  if(err) {
    console.log('error:', error);
  } else {
    console.log(message);
  }
});
