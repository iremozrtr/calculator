    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultInput = document.getElementById('result');
    const asalText = document.querySelector('.asal-text');

    const addButton = document.querySelector('.operator button:nth-child(1)');
    const subtractButton = document.querySelector('.operator button:nth-child(2)');
    const multiplyButton = document.querySelector('.operator button:nth-child(3)');
    const divideButton = document.querySelector('.operator button:nth-child(4)');


    function changeResult(resultNumber) {
        resultInput.value = resultNumber;
    }

    function isPrime(number) {
        if (number <= 1 || !Number.isInteger(number)) {
            return false;
        }
        if (number === 2) {
            return true;
        }
        if (number % 2 === 0) {
            return false;
        }
        for (let i=2;  i < number; i ++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }


    function Addition(num1,num2) {
        return num1+num2;
    }
    addButton.addEventListener("click",()=>{
        const num1 = parseFloat(number1Input.value) ;
        const num2 = parseFloat(number2Input.value) ;
        const addNumber = num1 + num2;
        changeResult(addNumber);
    if (!isNaN(addNumber)) {
        if (addNumber % 1 === 0) {
            const isResultPrime = isPrime(addNumber);
            if (isResultPrime) {
                asalText.textContent='is a prime number.';
            } else {
                asalText.textContent='is not a prime number. ';
            }
        } else {
            asalText.textContent='prime number check is not working.';
        }
    }

    });


    function Subtract(num1,num2) {
        return num1-num2;
    }
    subtractButton.addEventListener("click" , () => {
        const num1 = parseFloat(number1Input.value) ;
        const num2 = parseFloat(number2Input.value) ;
        const substractNumber = num1 - num2;
        changeResult(substractNumber);
    if (!isNaN(substractNumber)) {
        if (substractNumber % 1 === 0) {
            const isResultPrime = isPrime(substractNumber);
            if (isResultPrime) {
                asalText.textContent='is a prime number.';
            } else {
                asalText.textContent='is not a prime number. ';
            }
        } else {
            asalText.textContent='prime number check is not working.';
        }
    }


    });


    function Multiply(num1,num2) {
        return num1*num2;
    }
    multiplyButton.addEventListener("click", ()=>{



        const num1 = parseFloat(number1Input.value) ;
        const num2 = parseFloat(number2Input.value) ;
        const multiplyNumber = num1 * num2;
        changeResult(multiplyNumber);
        if (!isNaN(multiplyNumber)) {
            if (isResultPrime) {
                asalText.textContent='is a prime number.';
            } else {
                asalText.textContent='is not a prime number. ';
            }
        } else {
            asalText.textContent='prime number check is not working.';
        }



    });

    function Divide(num1, num2) {
        return num1 / num2;
    }
    divideButton.addEventListener("click", () => {
        const num1 = parseFloat(number1Input.value) ;
        const num2 = parseFloat(number2Input.value) ;
        const dividedNumber = Divide(num1, num2);
        changeResult(dividedNumber);

        if (!isNaN(dividedNumber)) {
            if (dividedNumber % 1 === 0) {
                const isResultPrime = isPrime(dividedNumber);
                if (isResultPrime) {
                    asalText.textContent='is a prime number.';
                } else {
                    asalText.textContent='is not a prime number. ';
                }
            } else {
                asalText.textContent='prime number check is not working.';
            }
        }

    });

