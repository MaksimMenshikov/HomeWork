
const action = getAction();
const operandNumbers = getNumbers('Введите колличесвто оперндов , но не менее 2х:');
let sumExpression; //Переменная будет накапливать выражение в виде строки
let result;//Переменная будет накапливать результат

switch (action) {
    case '+':
        inputCycle(plus);
        break;
    case '-':
        inputCycle(minus);
        break;
    case '*':
        inputCycle(multip);
        break;
     case '/':
        inputCycle(deline);
        break;
    default:
        alert('Something wrong');
}

alert(`${sumExpression}=${result}`);


//*********Описание функций*********/


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


function getNumbers(title) {
    let operand = prompt(title);

    while (isNumberInvalid(operand)) {
        operand = prompt(title);
    }
    return +operand;
}
function isNumberInvalid(operand) {
    return isValInvalid(operand)||operand<2;
}

function isValInvalid(operand) {
     return operand === null || operand.trim() === '' || isNaN(operand);
}

function inputCycle(mathMethod){
for (let i=1;i<=operandNumbers;i++) {
    let val=getNumberof(`Введите ${i} число`);
   
    if(i==1){ sumExpression=val; 
        result=val;}
    else
    {   sumExpression=expression(val); 
        result=mathMethod(val);
    } 
}
}
function getNumberof(title) {
    let operand = prompt(title);

    while (isValInvalid(operand)) {
        operand = prompt(title);
    }
    return +operand;
}

function expression(operand){
sumExpression=(`${sumExpression}${action}${operand}`);
return sumExpression;
}
function plus(operand){
    return result+=operand;
}
function minus(operand){
    return result-=operand;
}
function multip(operand){
    return result*=operand;
}
function deline(operand){
    return result/=operand;  
}
