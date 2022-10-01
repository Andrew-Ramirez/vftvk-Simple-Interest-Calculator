function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years/100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit $" + principal + ",\<br\>at an interest rate of " + rate + "%.\<br\>You will receieve an amount of " + interest + "\<br\> in the year " + year;
}
function updateRate() {
    var ratEval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = ratEval+"%";
}
function valCheck() {
    if(document.getElementById("principal").value<=0) {
        alert("Please input a positive number");
    }
    else {
        compute();
    }
}
        