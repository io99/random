var argv = require('yargs').argv;
//we are accessing the .argv property
//stores all the arguements passed into the program
//we need to access the .argv property.
var command = argv._[0];
//underscore's value is an array

console.log(argv); 

if(command === 'hello'&& typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined');
{
	console.log('Hello'+ argv.name + ' '+argv.lastname+'!');
}

//What this program says is -
/*
if we issue hello command as well as the name is given. Let's say we give hello --Sangeet and --Devan, then it will give 
Hello first name + lastname.
Command line interface is basically a combo of text editor + typing space

*/
if(command==='hello'&& typeof argv.name !== 'undefined'){
console.log('Hello' + argv.name+ '!');
}
else if(command === 'hello'){
	console.log('Hello world');
}


// Create an object anime, include type of anime, total seasons, rating,protagonist

var anime = {};
anime.name = Naruto;
anime.genre = Shounen;
anime.protagonist = Itachi;
anime.seasons = 20;
anime.rating = 8.6;

function(bestAnime){
	console.log('Your favorite anime is '+ ' '+ anime.name. + it has a rating of+ anime.rating);
	bestAnime();
}
bestAnime(anime);


var chocolate = {};
chocolate.name = 'Ferrero rocher';
chocolate.type = 'Dubai';
chocolate.country = 'swiss';
function(bestchoco){
	console.log(Your favorite chocolate is + ' '+ chocolate.name );

}
bestchoco(chocolate);

var anime = {

name: 'Naruto';
genre:'Shounen';
Episodes: 500;
}



function add(a,b){
	return a+b;
}
var result = add(1,88);
console.log(result);

math.random() returns a number between o and 1
math.random() = (max- min)
math.random()= (max - min)+min returns a number b/w both including the starting and final


//underscore is a property of argv
//argv inde oru property aan underscore
//for example- person.firstName = 'Andrew';
var argv = require('yargs').argv;

var command = argv._[0];

console.log(argv);
//typeof is used to check undefined

if(command === 'Hello'&& typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined');
{
console.log('Hello'+ argv.name + argv.lastname);

}


if (command==='Hello'&& typeof argv.name !== 'undefined'){
	console.log('Hello'+ argv.name);
}
else if (command=== 'hello'){
	console.log('Hello world');
}

if(command==='Hello'+ typeof argv.name !== 'undefined'){
	console.log('hello'+ argv.name);
}
else if (command==='Hello'){
console.log('Hello world');
}

var argv = require('yargs').argv;
var command = argv._[0];

if(command=='Hello' && typeof argv.name !=== 'undefined'){
	console.log('hello'+ argv.name);
}
else if(command==='Hello'){
	console.log('Hello bruh');
}


var argv = require('yargs').argv;
var command = argv._[0];

if(command === 'Hello'&& typeof argv.name !== 'undefined'){
	console.log('Hello'+ argv.name);

}
else if(command== 'hello'){
	console.log('Hello world');
}
else(){
	console("There is nothing to show here unless u type something");
	
}