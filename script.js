const action = getAction();
const operandsArray = getOperands('Введите операнды через запятую');
let result=+operandsArray[0];
for(let i=1;i<operandsArray.length;i++){
     result = calculate(result,+operandsArray[i]);
}
alert(`Результат : ${result}`);


//***********Описание функций**************/
function getAction() {
    let action = prompt('Выбирете действие  + - * / ');

    while (isActionInvalid(action)) {
        action = prompt('Некорректный ввод.Выбирете действие  + - * / ');
    }
    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}


function getOperands(title) {
    let operand = prompt(title);

    while (isOperandsInvalid(operand)) {
        operand = prompt(title);
    }
   
    return operand.split(",");
}

function isOperandsInvalid(operand) {
     return operand === null || operand.trim() === '';
}

function calculate(a, b) {
    switch (action) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  }



