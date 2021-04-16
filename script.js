function compute(){
    var principal = parseInt(document.getElementById("principal").value, 10);
	var rate = parseFloat(document.getElementById("rate").value);
	var years = parseInt(document.getElementById("years").value, 10);
	var year = new Date().getFullYear() + years;
    var amount = principal * years * rate / 100;
    if(principal <= 0 || !principal){
    	alert("enter a positive number")
    	document.getElementById("principal").focus()
    }else {
    document.getElementById("result").innerHTML='<p class="result">If you deposit <span class="highlight">'+principal+'</span>,\<br\>at an interest rate of <span class="highlight">'+rate+'%.</span>\<br\>You will receive an amount of <span class="highlight">'+amount+'</span>\<br\>in the year <b>'+year+'</span>\<br\><p>'

    }
    
}

function updateRate() {
    var rateVal = document.getElementById("rate").value
    document.getElementById("rate_val").innerHTML = rateVal + "%"
}
