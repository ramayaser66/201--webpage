'use strict';

alert("welcome to my page");
var welcomeNote = confirm(" Do you feel like playing a game? ");
console.log(welcomeNote);
var counterOfCorrectAnswers = 0;

if (welcomeNote === true) {
    alert(" let's go! ");

    firstFunction();
    secondFunaction();
    thirdFunction();
    forthFunction();
    fifthFunction();
    sixthFunction();
    saventhFunction();
    scoreFun();

    function firstFunction() {
        var q1 = prompt(" what is your name? ");
        console.log(q1);
        alert(" Nice to meet you " + q1 + " hope you enjoy this site ");
    }

    function secondFunaction() {
        var q2 = prompt(" Do you think we're of the same age? ");
        console.log(q2);
        if (q2 === 'yes') {
            alert(' shall we check ? ');
            counterOfCorrectAnswers++;

            var userAge = prompt("how old are you?");
            var age1 = parseInt(userAge);
            if (age1 === 22) {
                alert(" we are of the same age! ");
                counterOfCorrectAnswers++;
            } else if (age1 > 22) {
                alert(" I guess Iam younger :( ");
            } else if (age1 < 22) {
                alert(" I am older than you :) ");
            }

        } else {
            alert(" maybe we are ");
            var age = prompt("how old are you");
            var age2 = parseInt(age);
            if (age2 === 22) {
                alert(" we are of the same age! ");
            } else if (age2 > 22) {
                alert(" I guess Iam younger :( ");
            } else if (age2 < 22) {
                alert(" I am older than you :) ");
            }

        }
    }

    function thirdFunction() {
        var q3 = prompt('do you think I am doing a good job so far');
        console.log(q3);
        if (q3.toLowerCase() === 'yes') {
            alert("thank you, you're so nice!");
            console.log(q3);

            counterOfCorrectAnswers++;
        } else if (q3.toLowerCase() === 'no') {
            alert('thank you for being honest, i will try to do my best');
        }
    }

    function forthFunction() {
        var q4 = prompt("do you think I like animals ?");

        if (q4.toLocaleLowerCase() === 'yes') {
            alert("indeed I do my friend!  ");
            counterOfCorrectAnswers++;
            var animale = prompt("what do you think I like more Cats or Dogs!");
            if (animale.toLowerCase() === 'dogs' || animale.toLowerCase() === "dog") {
                alert(" you're on a roll :)");
                counterOfCorrectAnswers++;
            } else if (animale.toLowerCase() === 'cats' || animale.toLowerCase() === "cat") {
                alert(" I like them, bit not as much ");
            }
        } else if (q4.toLocaleLowerCase() === 'no') {
            alert(" sadly you are mistaken ");
        }
    }

    function fifthFunction() {
        var q5 = prompt(" DO think i like sports?  ");

        switch (q5) {
            case 'yes':
                alert("you are right, I love sports");
                counterOfCorrectAnswers++;
                break;

            case 'no':
                alert(" guess again :( ");
                break;
        }

    }



    function sixthFunction() {
        alert(' the next game should be fun, try to guess!');
        alert(" you have 4 guesses");

        for (var i = 0; ((i < 4) && (note !== '7')); i++) {

            var note = prompt(" guess my favorite number");
            console.log(note);



            var int = parseInt(note);
            if (int == 7) {
                alert("that's correct");
                counterOfCorrectAnswers++;
                i = 5;
            } if (int < 7) {
                alert(" try higher!");
                alert("I'll give you a hint, it's lower than 10 and some say it's a lucky number! ");

            } else if (int > 7) {
                alert(" try lower! ");
                alert("I'll give you a hint, it's lower than 10 and some say it's a lucky number! ");
            }





        }
        alert(" the correct answer is 7 ");
    }

    function scoreFun() {
        var score = prompt(" wanna know your score ");
        if (score = 'yes') {
            alert(" your score is " + counterOfCorrectAnswers++ + 'out of 7');

        }
    }

    function saventhFunction() {
        var movieType = ['comedy', 'horror', 'superheros', "crime", 'foreign', 'anime'];
        for (var k = 0; k < movieType.length; k++) {

            var userGuess = prompt("what type of movies do you think I prefer? ");
            console.log('test' + userGuess)
            for (var j = 0; j < movieType.length; j++) {

                if (userGuess == movieType[j]) {
                    alert("yes that one of thim");

                    k = 6;
                    j = 6;
                    console.log("i'm here in if ");
                }


            }

            if (k == 6) {


                alert("these are the correct answers " + movieType.toString());
                break;
            }
            else {
                alert("try again");
            }
        }







    }
}

else if (welcomeNote === false) {
    alert(" goodbey!");
}


