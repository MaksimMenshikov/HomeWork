let operandA;
let operandB;
let mathMetod;
let result;

operandA=inputData(1);
operandB=inputData(2);

do{
    mathMetod=prompt("Выберите действие ( + - * / )");
}while (mathMetod===null||mathMetod===''||(mathMetod!=='-'&&mathMetod!=='+'&&mathMetod!=='*'&&mathMetod!=='/'))

switch(mathMetod){
    case "+":
        result=operandA+operandB; alert(`${operandA}+${operandB}=${result}`); 
    break;
    case "-":
        result=operandA-operandB; alert(`${operandA}-${operandB}=${result}`); 
    break;
    case "*":
        result=operandA*operandB; alert(`${operandA}*${operandB}=${result}`); 
    break;
    case "/":
        result=operandA/operandB; alert(`${operandA}/${operandB}=${result}`); 
    break;
    
}
function inputData(num)
{
do{
    val=prompt(`Введите ${num} число :`);
}while (val===null||val===''||isNaN(val))
val=Number(val);
return val;
}