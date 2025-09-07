const textBox = document.getElementById("textBox");
const toCm = document.getElementById("toCm");
const toInch = document.getElementById("toInch");
const result = document.getElementById("result");
const toFt = document.getElementById("toFt");

function convert(){

    let height = Number(textBox.value);

    if (toCm.checked) {

        result.textContent = (height * 2.54).toFixed(1) + " cm";

    } else if (toInch.checked){

        result.textContent = (height / 2.54).toFixed(1) + " in";

    } else if (toFt.checked){

        let feet = Math.floor(height / 30.48);
        let inches = ((height / 2.54) % 12).toFixed(0);
        result.textContent = feet + "ft " + inches +"in "

    }
    
    else {
        result.textContent = "Choose a conversion option.";
    }


}
 