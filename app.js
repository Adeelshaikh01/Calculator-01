function details(val) {
    var data = document.getElementById("calScreen")
    var lastVal = data.value.slice(data.value.length - 1);
    var operator = ["+","-","*","/","%"];
    if(operator.indexOf(lastVal) !== -1 && operator.indexOf(val) !== -1){
        data.value = data.value.slice(0,data.value.length - 1) + val   
    }
    else{
        data.value += val;
    }
}

function display() {
    var display = document.getElementById("calScreen")
    if (display.value != "") {
        display.value = eval(display.value);
    }
    else {
        display.value = "";
    }
}

function clearScr() {
    var clr = document.getElementById("calScreen")
    clr.value = "";
}


// var val = document.getElementById('val');
//     var lastVal = val.value.slice(val.value.length - 1);
//     var opt = ['+','-','*','/'];
//     if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
//         val.value = val.value.slice(0,-1) + num
//     }else{
//         val.value += num;