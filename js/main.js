var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResultBox = document.querySelector('.result-box');


function sum(numbers) {
    var result = 0;

    for (var number of numbers) {
        result = result + number;
    }

    return result;
}


elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var inputNumber = elInput.value.trim().split('');

    elResultBox.textContent = 'Results: ' + sum(inputNumber);
});