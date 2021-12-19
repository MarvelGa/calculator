const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');
const optionSelected = document.querySelector('#arithmeticOperations');
let result;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = () => {

        const firstValue = Number.parseInt(firstInput.value);
        const secondValue = Number.parseInt(secondInput.value);
        const option = optionSelected.value;
        switch (option) {
            case('addition'):
                result = (firstValue + secondValue).toFixed();
                break;
            case('subtraction'):
                result = (firstValue - secondValue).toFixed();
                break;
            case('multiplication'):
                result = (firstValue * secondValue).toFixed();
                break;
            case('division'):
                result = (firstValue / secondValue).toFixed();
                break;
            default:
                console.log(`Your entered ${firstValue} and ${secondValue}, but something went wrong`);
        }
        localStorage.clear();
        localStorage.setItem('firstNumber', firstValue.toString());
        localStorage.setItem('secondNumber', secondValue.toString());
        localStorage.setItem('operation', option);
        localStorage.setItem('result', result);

    };
});

function clean() {
    document.getElementById('firstNumber').value = "";
    document.getElementById('secondNumber').value = "";
    document.getElementById('result').value = "";
    document.getElementById('arithmeticOperations').value = "";
}

document.querySelector('#result').value = localStorage.getItem('result');
document.querySelector('#firstNumber').value = localStorage.getItem('firstNumber');
document.querySelector('#secondNumber').value = localStorage.getItem('secondNumber');
document.querySelector('#arithmeticOperations').value = localStorage.getItem('operation');
localStorage.clear();
