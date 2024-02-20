//Digits function
document.getElementById("0").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "0";
}

document.getElementById("1").onclick = function () {
    document.getElementById("display").value= document.getElementById("display").value + "1";
}
document.getElementById("2").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "2";
}
document.getElementById("3").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "3";
}
document.getElementById("4").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "4";
}
document.getElementById("5").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "5";
}
document.getElementById("6").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "6";
}
document.getElementById("7").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "7";
}
document.getElementById("8").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "8";
}
document.getElementById("9").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + 9;
}


//Operator function
document.getElementById("plus").onclick = function () {
    document.getElementById("display").value += "+" ;
}
document.getElementById("minus").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value + "-";
}
document.getElementById("multiply").onclick = function () {
    
    document.getElementById("display").value = document.getElementById("display").value + "*";
}
document.getElementById("divide").onclick = function () {
    document.getElementById("display").value = document.getElementById("display").value  + "/";
}



//Equal || result function

document.getElementById("equal").onclick = function () {
    
    document.getElementById("display").value = eval(document.getElementById("display").value);
    if(document.getElementById("display").value == "undefined"){
        document.getElementById("display").value = "";
    }
}


//All clear Function AC
document.getElementById("clear").onclick = function () {
    document.getElementById("display").value = "";
}

//BackSpace function

document.getElementById("backspace").onclick = function () {
    var displayElement = document.getElementById("display");
    var value = displayElement.value;

    if (value.length > 0) {
        displayElement.value = value.slice(0, -1);
    }
};

//checks for syntax



