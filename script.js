function calculate(params) {
    let num1 = +document.getElementById('num1').value
    let num2 = +document.getElementById('num2').value
    let result

    if (op == '+'){
        result = num1 + num2
    }
    if (op == '-'){
        result = num1 - num2
    }
    if (op == '*'){
        result = num1 * num2
    }
    if (op == '/'){
        result = num1 / num2
    }
    if (op == '**'){
        result = num1 ** num2
    }
    if (op == '%'){
        result = num1 % num2
    }
    document.getElementById('result').innerHTML = result
}

