//IIFE
(function(){
    console.log('reading js');
    'use strict';

    const introduction = document.querySelector('#introduction');
    const theForm = document.querySelector('#theForm');
    const results = document.querySelector('#results');

    // The button on introduction takes user to the form
    // intro - 0, form - 1, results - (-1)
    document.querySelector('#introButton').addEventListener('click', function (){
        introduction.style.zIndex = "-1";
        theForm.style.zIndex = "1";
        results.style.zIndex = "0";

    });

    // The submit on the form takes user to the results
    // intro - (-1), form - (0), results - 1

    document.querySelector('#theForm').addEventListener('submit', function (event){
        event.preventDefault();
        results.style.zIndex = "1";
        introduction.style.zIndex = "-1";
        theForm.style.zIndex = "0";

        const answer0 = document.querySelector('#answer0').value;
        const answer1 = document.querySelector('#answer1').value;
        const answer2 = document.querySelector('#answer2').value;
        const answer3 = document.querySelector('#answer3').value;
        const answer4 = document.querySelector('#answer4').value;
        const answer5 = document.querySelector('#answer5').value;
        const answer6 = document.querySelector('#answer6').value;
        const answer7 = document.querySelector('#answer7').value;
        const answer8 = document.querySelector('#answer8').value;
        const answer9 = document.querySelector('#answer9').value;
        
        const peaDog = `Hello, ${answer0} You are a being of ${answer1} and warm energies, radiating ${answer2} wherever you tread. Like a gentle ${answer3} tickling the meadow, your presence ${answer4} those around you, drawing them close with an innate charm. Your curious and ${answer5} nature is your gift, a reminder that ${answer6} thrives in the smallest of moments. But beware, ${answer0}, your tender heart can sometimes tangle itself in the ${answer7} of others' troubles. Remember to ${answer8} when needed, for your magic is brightest when ${answer9}.`;
        madlib.innerHTML = peaDog;
        
    });

    // The submit button reveals results on the next page, filling in the words
    const form = document.querySelector('#myForm'); 
    const madlib = document.querySelector('.madlib');

    // the wishAgain button takes user back to the intro and they can input new answers. 
    document.querySelector('#wishAgain').addEventListener('click', function (){
        introduction.style.zIndex = "1";
        theForm.style.zIndex = "0";
        results.style.zIndex = "-1";

    });

}())