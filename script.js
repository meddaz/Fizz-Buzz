function numbers() {
    var result = document.getElementById('num').value;

    if (result === 0 && result % 5 === 0) {


        document.getElementById("display").innerHTML =
            "Fizzbuzz";
    }
    else if (result % 3 === 0) {

        document.getElementById("display").innerHTML =
            "Fizz";
    }
    else if (result % 5 === 0) {

        document.getElementById("display").innerHTML =
            "Buzz";

    }
    else {
        document.getElementById("display").innerHTML =
            result;

    }



}