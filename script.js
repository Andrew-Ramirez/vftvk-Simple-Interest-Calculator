function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit " + principal + ", at an interest rate of " + "rate" + "%. You will receieve an amount of " + interest + " in the year " + year;
}
function updateRate() {
    var ratEval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = ratEval;
}
        