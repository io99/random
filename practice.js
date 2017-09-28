var request = require('request');

module.exports = function (location, callback){
	var encodedLocation = encodedURIComponent(location);
}

var url = 'https://api.darksky.net/forecast/457587eefad4aa5cacf9cc91b296cd02/37.8267,-122.4233'

if(!location){
	return callback('The location wasnt provided');
}

request({
url:url,
json:true,
}), function (error, response, body){
	if(error){
		console.log('Unable to fetch weather');
	}
}
else{
	callback('It\s'+ body.main.temp + 'in' body.name + '!');
}
});
}