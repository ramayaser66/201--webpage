'use strict';
alert("welcome to my page");
var welcomeNote = confirm(" Do you feel like playing a game? ");
console.log(welcomeNote);
var counterOfCorrectAnswers = 0;

if (welcomeNote === true) {
    alert(" let's go! ");

    var q1 = prompt(" what is your name? ");
    console.log(q1);
    alert(" Nice to meet you " + q1 + " hope you enjoy this site ");


    var q2 = prompt(" Do you think we're of the same age? ");
    console.log(q2);
    if (q2 === 'yes') {
        alert(' shall we check ? ');
        counterOfCorrectAnswers++;

        var userAge = prompt("how old are you?");
        console.log(userAge);
        if (userAge === '22') {
            alert(" we are of the same age! ");
            counterOfCorrectAnswers++;
        } else if (userAge > '22') {
            alert(" I guess Iam younger :( ");
        } else if (userAge < '22') {
            alert(" I am older than you :) ");
        }

    } else {
        alert(" maybe we are ");
        var age = prompt("how old are you");
        if (age === '22') {
            alert(" we are of the same age! ");
        } else if (age > '22') {
            alert(" I guess Iam younger :( ");
        } else if (age < '22') {
            alert(" I am older than you :) ");
        }

    }


    // var q10 = prompt(" How old do you think I am ?");
    //console.log(q3); 
    // if (q10 == '22') {
    //  alert("Right again");
    //  } else if (q10 > '22') {
    // alert(" try younger :( ");
    //  } else if (q10 < '22') {
    // alert("try older :) ");
    // }

    var q3 = prompt('do you think I am doing a good job so far');
    console.log(q3);
    if (q3.toLowerCase() === 'yse') {
        alert("thank you, you're so nice!");
        console.log(q3);

        counterOfCorrectAnswers++;
    } else if (q3.toLowerCase() === 'no') {
        alert('thank you for being honest, i will try to do my best');
    }


    var q4 = prompt("do you think I like animals ?");
    //console.log(q4);
    if (q4.toLocaleLowerCase() === 'yes') {
        alert("indeed I do my friend!  ");
        counterOfCorrectAnswers++;
        var animale = prompt("what do you think I like more Cats or Dogs!");
        if (animale === 'dogs') {
            alert(" you're on a roll :)");
            counterOfCorrectAnswers++;
        } else if (animale === 'cats') {
            alert(" I like them, bit not as much ");
        }
    } else if (q4.toLocaleLowerCase() === 'no') {
        alert(" sadly you are mistaken ");
    }


    var q5 = prompt(" DO think i like sports?  ");
    //console.log(q5);
    switch (q5) {
        case 'yes':
            alert("you are right, I love sports");
            counterOfCorrectAnswers++;
            break;

        case 'no':
            alert(" guess again :( ");
            break;
    }






    //var  note = prompt (" guess my favorite number, you have 4 guesses");
    //  console.log(note);
    alert(' the next game should be fun, try to guess!');
    alert(" you have 4 guesses");
    for (var i = 0; ((i < 4) && (note !== '7')); i++) {


        var note = prompt(" guess my favorite number");
        console.log(note);
        //alert(" you have 4 guesses");

        alert("I'll give you a hint, it's lower than 10 and some say it's a lucky number! ");


        var int = parseInt(note);
        if (int == 7) {
            alert("that's correct");
            counterOfCorrectAnswers++;
        } if (int < 7) {
            alert(" try higher!");

        } else if (int > 7) {
            alert(" try lower! ");
        } else {

            break;
        }





    }
    alert(" the correct answer is 7 ");

    // var movieType = ['comedy', 'horror', 'superheros', "crime"];
    //console.log(movieType [1]); 
    //var q = movieType.length;
    // for ( var i =0; ((i < 6) && (i !== movieType.length)); i++){
    //  var q7 = prompt(" what type of movies do you think I prefer? ");
    // console.log (q7); 
    //console.log(movieType[i]);
    //alert ("you have 6 guesses");


    //}
    // var t = 0;
    //var check = false;
    //do{

    // var q7 = prompt(" what type of movies do you think I prefer? ");
    //  console.log(j);
    //var j=0;
    //t++;


    //} while (movieType.length < 6  &&  q7 !== movieType.length){
    //  alert (" again! ")
    //}

    var movieType = ['comedy', 'horror', 'superheros', "crime", 'foreign', 'anime'];

    for (var i = 0; i < 5; i++) {
        var q7 = prompt(" what type of movies do you think I prefer? ");
        // console.log(movieType[i]);
       // breack;

        for (var index = 0; index < movieType.length; index++) {



            if (q7 === movieType[index]) {
                alert(" correct!, that's one of them");
                counterOfCorrectAnswers++;
                break;
            }

         else {

            alert(" care to try again? ");


        }
        //breack;
    } 
   // break; 
    }
    alert(" the correct answers: comedy, horror, superheros, crime, foreign, anime ");

    var score = prompt(" wanna know your score ");
    if (score = 'yes') {
        alert(" your score is " + counterOfCorrectAnswers++ + 'out of 7');

    }












} else if (welcomeNote === false) {
    alert(" goodbey!");
}

