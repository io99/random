function doWork(){
	return new Promise()
}

function doWork(){
	return new Promise(function (resolve, reject){
		setTimeout(function(){
			console.log('done');
		}, 1000);
	} )
}

doWork().then(function (){
	return doWork(true);
}).then(function (){
	console.log('All done');
}).catch(function (){
	console.log(error);
});

