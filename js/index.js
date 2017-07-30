

var num1 = null;
var num2 = null;
var operand = false;
var operator = null;
$(".num").click(function(){
    var input = $(this).html();

    if(!operand){
        num1 = input;
        $(".screen").html(num1);
    }else{
        num2 = input;
        $(".screen").html(num1+operator+num2);
    }
});


$(".operator").click(function(){
    
    if(!operand){
        operator = $(this).text().replace(/\s+/g, '');
        operand = true;
        $(".screen").html(num1+operator);
    }
    
});

$(".equal").click(function(){
    if(num1 &&  num2 && operator){
        var output = operation();      
        $(".screen").html(output);
        clear();
    }
    
});
function operation(){
    var x;    
    switch(operator){
        case "+": 
            x = parseInt(num1) + parseInt(num2);
            break;
        case "-": 
            x = parseInt(num1) - parseInt(num2);
            break;
        case "*": 
            x = parseInt(num1) * parseInt(num2);
            break;
        case "/": 
            x = parseInt(num1) / parseInt(num2);
            break;
    }
    return x;

}


$(".clear").click(function(){    
   clear();
   $(".screen").html("");
});

function clear(){
    
    num1 = null;
    num2 = null;
    operand = false;
    operator = null;
}