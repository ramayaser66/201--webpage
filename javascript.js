'use strict';

alert("welcome to my page");
var welcomeNote = confirm(" Do you feel like playing a game? ");
console.log(welcomeNote);
var counterOfCorrectAnswers = 0;

if (welcomeNote === true) {
	alert(" let's go! ");
function one(){
	var q1 = prompt(" what is your name? ");
	console.log(q1);
	alert(" Nice to meet you " + q1 + " hope you enjoy this site ");
}
one();


var keepscore = 0;

function two(){
	var q2 = prompt(" Do you think we're of the same age? ");
	console.log(q2);
	if (q2 === 'yes') {
		alert(' shall we check ? ');
	keepscore++;

		var userAge = prompt("how old are you?");
		console.log(userAge);
		if (userAge === '22') {
			alert(" we are of the same age! ");
			keepscore++;
		} else if (userAge > '22') {
			alert(" I guess Iam younger :( ");
		} else if (userAge < '22') {
			alert(" I am older than you :) ");
		}
	} else if (q2 ==='no'){
     console.log(q2);
        alert(" let's check shall we ");
        var userAge = prompt("how old are you?");
        
		if (userAge === '22') {
			alert(" we are of the same age! ");
		} else if (userAge > '22') {
			alert(" I guess Iam younger :( ");
		} else if (userAge < '22') {
			alert(" I am older than you :) ");
		}

	}}
two();

function three(){
	var q3 = prompt('do you think I am doing a good job so far');
	console.log(q3);

	if (q3.toLowerCase() === 'yes') {
		alert(' thank you that is so sweet ');
		keepscore++;
	} else if (q3.toLowerCase() === 'no') {
		alert('thank you for being honest, i will try to do my best');
	}
}

three();
function four(){
var q4 = prompt("do you think I like animals ?");
	console.log(q4);
	if (q4.toLocaleLowerCase() === 'yes') {
		alert("indeed I do my friend!  ");
		keepscore++;
		var animale = prompt("what do you think I like more Cats or Dogs!");
		if (animale === 'dogs') {
			alert(" you're on a roll :)");
			keepscore++;
		} else if (animale === 'cats') {
			alert(" I like them, bit not as much ");
		}
	} else if (q4.toLocaleLowerCase() === 'no') {
		alert(" sadly you are mistaken ");
	}

}
four();
function five(){
	var q5 = prompt(" DO think i like sports?  ");
	console.log(q5);
	switch (q5) {
		case 'yes':
			alert("you are right, I love sports");
			keepscore++;
			break;

		case 'no':
			alert(" guess again :( ");
			break;
	}

}
five();
alert("your score is "+ keepscore);

	alert(' the next game should be fun, try to guess!');
	alert(" you have 4 guesses");

function six(){
	for (var i = 0;
		((i < 4) && (note !== '7')); i++) {


		var note = prompt(" guess my favorite number");
		console.log(note);


		alert("I'll give you a hint, it's lower than 10 and some say it's a lucky number! ");


		var int = parseInt(note);
		if (int == 7) {
			alert("that's correct");
			keepscore++;
		}
		if (int < 7) {
			alert(" try higher!");

		} else if (int > 7) {
			alert(" try lower! ");
		} else {

			break;
		}


	}
	alert(" the correct answer is 7 ");

// <<<<<<< khaled-drive-lab-04
// }


// six();
// =======
// >>>>>>> main

	
/*	var condition= false;

	for (var g = 0; g < movieType.length;g++ ) {
		
		for (var m = 0; m < movieType.length; m++) {
            var q7 = prompt(" what type of movies do you think I prefer? ");
			if (movieType[m]===q7) {

				alert("is corect");
                g=movieType.length;
                condition = true;
				

            }


            else if (movieType[m]!= q7){
                alert("try again");


               continue;}}}
*/			   saven();
			   
function saven(){    
               var movieType = ['comedy', 'horror', 'superheros', "crime", 'foreign', 'anime'];
               for (var k =0  ; k<movieType.length ; k++){

        var userGuess=prompt("what type of movies do you think I prefer? ");   
        console.log('test'+userGuess) 
        for(var j=0 ;j< movieType.length;j++ ){
            
            if(userGuess==movieType[j]){
             alert("yes that one of thim");
            
                k=6;
                j=6; 
    console.log("i'm here in if ");
                }
                
        //    else if (userGuess!= movieType[j]) {
        //         alert("try again");
        //     console.log(' im in else if'); 
        //     }
    
            }

            if (k==6){
    
                alert("this is the numbers " + movieType.toString());
               break;
                }    
                else {
                alert("try again");
                } 
			}}}