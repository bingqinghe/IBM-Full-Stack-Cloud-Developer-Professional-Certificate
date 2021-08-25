function compute()
{
    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("rate").value;
    let year = document.getElementById("years").value;

    if (amount == "") {
        alert("Please don't entry empty or aplhabet character");
        document.getElementById("amount").focus();
        return false;
    } else if (amount <= 0) {
        alert("Please enter a positive number");
        document.getElementById("amount").focus();
        return false;
    }
    
    let currentyear = new Date().getFullYear();
    let future = parseInt(currentyear, 10) + parseInt(year, 10);
    let interest = amount * year * rate / 100;
    let result = "If you deposit <mark>" + amount + "</mark>,<br> at an interest rate of <mark>" + rate + " % </mark><br> You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML = result;
}

function showValue(val)
{
    document.getElementById('showrate').innerHTML = val + "%";
}