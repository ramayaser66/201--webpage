'use strict';
alert("welcome to my page");
var welcomeNote = confirm(" Do you feel like playing a game? ");
console.log(welcomeNote);

if (welcomeNote === true) {
    alert (" let's go! ");
    
var q1 = prompt (" what is your name? ");
//console.log(q1);  
alert (" Nice to meet you " + q1 );  

var q2 = prompt(" Do you think we're of the same age? ");
//console.log(q2);
if (q2 === 'yes'){
    alert (' that is correct! '); 
} else {
    alert (" Guess again! "); 
}


var q3 = prompt (" How old do you think I am ?"); 
//console.log(q3); 
if (q3 == '22'){
    alert ("Right again");
} else if (q3 > '22'){
    alert (" try younger :( ");
} else if (q3 < '22'){
    alert ("try older :) ");
}


var q4 = prompt ("would you say I am an animle person ?"); 
//console.log(q4);
if (q4.toLocaleLowerCase() === 'yes'){
    alert ("indeed I am my friend!  "); 
    var animale = prompt ("Who do you think I like more Cats or Dogs!");
    if (animale === 'dogs'){
        alert (" you're on a roll :)");
    } else if (animale === 'cats'){
        alert (" I like them, bit not as much ")
    }
} else if (q4.toLocaleLowerCase() === 'no'){
    alert (" sadly you are mistaken ");
}


var q5 = prompt (" DO think i like sports?  ");
//console.log(q5);
switch (q5){
    case 'yes':
        alert("you are right, I love sports")
        break; 
    
    case 'no':
        alert(" guess again :( ");
        break; 
}

























} else if (welcomeNote === false){
    alert (" goodbey!");}

