function getLarger(){
    let first = Number(document.getElementById('firstNumber').value);
    let second = Number(document.getElementById('secondNumber').value);

    if(first > second){
        document.getElementById("largerNumber").innerHTML = "The first one : " + first + " is larger than the second : " + second;
    }
    else if(first < second){
        document.getElementById("largerNumber").innerHTML = "The second one : " + second + " is larger than the first : " + first;
    }
    else if(first === second){
        document.getElementById("largerNumber").innerHTML = "The two numbers are the same";
    }
    else{
        document.getElementById("largerNumber").innerHTML = "Error";
    }
}


function getEvenOrOdd(){
    let number = Number(document.getElementById('evenOddNumber').value);
    let integer = Number.isInteger(number);

    if(integer === true){
        if(number%2 === 1 ){
            document.getElementById("evenOddAnswer").innerHTML = "This number is odd";
        }
        else if(number%2 === 0){
            document.getElementById("evenOddAnswer").innerHTML = "This number is even";
        }
        else{
            document.getElementById("evenOddAnswer").innerHTML = "Error";
        }
    }
    else{
        document.getElementById("evenOddAnswer").innerHTML = "Please enter an integer";
    }
}