const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultInput = document.getElementById('result');
const operatorButtons = document.querySelectorAll('.operator .btn-num');


const addButton = document.querySelector('.operator button:nth-child(1)');
const subtractButton = document.querySelector('.operator button:nth-child(2)');
const multiplyButton = document.querySelector('.operator button:nth-child(3)');
const divideButton = document.querySelector('.operator button:nth-child(4)');
document.addEventListener('DOMContentLoaded', () => {


    function Addition(){
        const num1=parseFloat(number1Input.value);
        const num2=parseFloat(number2Input.value);
        const result=num1+num2;
        resultInput.value=result;
    }
    addButton.addEventListener("click",Addition);

    function Subtract(){
        const num1=parseFloat(number1Input.value);
       let num2=parseFloat(number2Input.value);
        let result=num1-num2;
        resultInput.value=result;

    }
    subtractButton.addEventListener("click", Subtract);

    function Multiply(){
        const num1=parseFloat(number1Input.value);
        const num2=parseFloat(number2Input.value);
        let result=num1*num2;
        resultInput.value=result;
    }
    multiplyButton.addEventListener("click" ,Multiply);

    function Divide(){
        const num1=parseFloat(number1Input.value);
        const num2=parseFloat(number2Input.value);
        let result=num1/num2;
        resultInput.value=result;
    }
   divideButton.addEventListener("click" ,Divide);
});
