let feet    =document.getElementById("feet");
let meter   =document.getElementById("meter");
let inch    =document.getElementById("inches");
let cm      =document.getElementById("cm");
let yard    =document.getElementById("yards");
let km      =document.getElementById("km");
let mile    =document.getElementById("miles");

function feetToOther(val){
    meter.value = val/3.2808;
    inch.value =val*12;
    cm.value= val/0.032808;
    yard.value =val*0.33333;
    km.value = val/3280.8;
    mile.value = val*0.00018939;
}

function meterToOther(val){
    feet.value = val*3.2808;
    inch.value =val*12;
    cm.value= val/0.032808;
    yard.value =val*0.33333;
    km.value = val/3280.8;
    mile.value = val*0.00018939;
}
function inchesToOther(val){
    meter.value = val/39.370;
    feet.value =val*0.083333;
    cm.value= val/0.39370;
    yard.value =val*0.027778;
    km.value = val/39370;
    mile.value = val*0.000015783;
}
function cmToOther(val){
    feet.value= val/0.032808;
    meter.value = val/100;
    inch.value =val*0.39370;
    yard.value =val*0.010936;
    km.value = val/100000;
    mile.value = val*0.0000062137;
}
function yardToOther(val){
    feet.value= val*3;
    meter.value = val/1.0936;
    inch.value =val*36;
    cm.value =val/1.0936;
    km.value = val/1093.6;
    mile.value = val*0.00056818;
}
function kmToOther(val){
    feet.value= val*3280.8;
    meter.value = val*1000;
    inch.value =val*0.39370;
    yard.value =val*1093.6;
    cm.value = val*100000;
    mile.value = val*0.62137;
}
function milesToOther(val){
    feet.value= val*5280;
    meter.value = val/0.00062137;
    inch.value =val*633660;
    yard.value =val*1.769;
    km.value = val/0.62137;
    cm.value = val/0.0000062137;
}



function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "feet" : feetToOther (parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "inch" : inchesToOther(parseFloat(value)); break;
        case "cm"   : cmToOther(parseFloat(value)); break;
        case "yard" : yardsToOther (parseFloat(value)); break;
        case "km"   : kmToOther (parseFloat(value)); break;
        case "mile" : milesToOther(parseFloat(value)); break;
    }
}




