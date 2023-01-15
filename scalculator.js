let number1;
let number2;
let operator;
let res = '';
const checkOperaator = (action) => {
    let fnumber = Number(document.getElementById('num1').value);
    number1 = fnumber;
    operator = action;
    document.getElementById('num1').value = "";
}

const backSpace = () => {
    let tempstr = document.getElementById('num1').value.toString();
    let str = tempstr.split("");
    str.pop();
    res = str.join("");
    document.getElementById('num1').value = res;
}

const checkNumber = (numb) => {

    if (res) {
        document.getElementById('num1').value = numb;
    } else {
        document.getElementById('num1').value += numb;
    }

}

const calculation = () => {
    let fnumber = Number(document.getElementById('num1').value);
    number2 = fnumber;
    if (document.getElementById('num1').value !== '') {
        if (operator === '+') {
            let sum = number1 + number2;
            document.getElementById("num1").value = sum;
        }
        else if (operator === '-') {
            let sub = number1 - number2;
            document.getElementById("num1").value = sub;
        }
        else if (operator === '*') {
            let mul = number1 * number2;
            document.getElementById("num1").value = mul;
        }
        else if (operator === '/') {
            let div = number1 / number2;
            document.getElementById("num1").value = Math.round(div);
        }
        else if (operator === 'ac') {
            document.getElementById('num1').value = "";
        } else {
            document.getElementById('num1').value = "";
        }

    }
}
