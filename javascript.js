'use strict';
alert("welcome to my page")
var welcomeNote = confirm("do you feel like playing a game ?")

alert("let's go!")
var q1 = prompt(" what's your name? ")
console.log(q1);
alert(" Nice to meet you " + q1);

var q2 = prompt(" do you think we are of the same age?")
console.log(q2);
//switch (q2) {

// case 'yes' : 
//alert (' you are right!');
//break;

// case 'no' :
//   alert ('Guess again!');
// break; 
//}

if (q2.toLocaleLowerCase() === 'yes') {
    alert('you are right!')
} else if (q2.toLocaleUpperCase() === 'no') {
    alert('Guess again!')
}


var q3 = prompt("how old do you think i am?")

console.log(q3);

if (q3 === '22') {
    alert(' right again :) '); 
}
else if (q3 > '22') {
    alert('try lower :( ');

} else if (q3 < '22') {
    alert('try higher :( ');
}

var q4 = prompt('do you think i like pets')
console.log(q4);
if (q4.toLocaleLowerCase === 'yes') {
    alert(" that's correct ");

} else if (q4.toLocaleUpperCase === 'no') {
    alert(" that's wrong ");
}


var q5 = prompt('do you think i like movies')
switch (q5) {
    case 'yes':
        alert('you are right, i like watching movies alot');
        break;

    case 'no':
        alert('think again!');
        break;
}






