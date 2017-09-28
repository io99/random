var request = require('request');

function getWeather(location){
	return new Promise(function (resolve, reject){
		var ur; = '';
		var encodedURL = encodedURIComponent(location);

		if(!location){
			console.log('The location was not provided');
		}
	})
}

request({
	url:url,
	JSON:true
}, function (error, respone, body)
{

})

