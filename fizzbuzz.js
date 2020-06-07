/* eslint-disable no-undef */
/* eslint-disable strict */

function playGame() {
  //On submit get "number-choice"
  $('#number-chooser').submit(function(event){
    event.preventDefault();
    // prevents default action from happening, ie load to a new page
    const choosenNumber = $(this).find('#number-choice').val();
    // store the number the user inputted into choosenNumber variable
    // for each number
    // 1. check whether it is divisible by 3, 5 or both
    // 2. append correct format to js-results div
    for (let counter = 0; counter <= choosenNumber; counter++){
      if (counter % 3 === 0 && counter % 5 === 0) {
        $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>Fizzbuzz</span></div>');
      } else if (counter % 5 === 0) {
        $('.js-results').append('<div class="fizz-buzz-item fizz"><span>Fizz</span></div>');
      } else if(counter % 3 === 0) {
        $('.js-results').append('<div class="fizz-buzz-item buzz"><span>Buzz</span></div>');
      } else {
        $('.js-results').append(`<div class="fizz-buzz-item"><span>${counter}</span></div>`).css('fizz-buzz-item');
      }
    }
  });
}

// make ready
$(playGame);