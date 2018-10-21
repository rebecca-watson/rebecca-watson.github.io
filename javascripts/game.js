function increment(name) {
    var number = parseInt(name.innerHTML.split("/",1));
    var storage = parseInt(name.innerHTML.split("/")[1]);
    if (number < storage){
	  	number++;
  	  	name.innerHTML = number + "/" + storage;
    }
}

function decrement(name) {
    var number = name.innerHTML.split("/",1);
    if (number > 0){
    	var storage = name.innerHTML.split("/")[1];
    	number--;
    	name.innerHTML = number + "/" + storage;
    }
}

function storage(name) {
    var price = Number(document.getElementById(name.id+"StorUp").innerText.split("$")[1]);
	if (Number(money.innerHTML) >= price) {
    	var number = name.innerHTML.split("/",1);
    	var storage = name.innerHTML.split("/")[1];
        var total = Number(money.innerHTML);
    	storage=storage*2;
    	name.innerHTML = number + "/" + storage;
        total = total - price
        money.innerHTML = total.toFixed(2);
    }
}

function auto(name) {
	var total = Number(money.innerHTML);
    var price = Number(document.getElementById(name.id+"Auto").innerText.split("$")[1]);
    total -= price;
    money.innerHTML = total.toFixed(2);
	increment(wheat);
	setInterval(function(){increment(name);},10000);
}

function incdec(a,b){
	if (b.innerHTML.split("/",1) > 0 && parseInt(a.innerHTML.split("/",1)) < parseInt(a.innerHTML.split("/")[1])) {
	    increment(a)
        decrement(b)
    }
}

function auto2(a,b) {
	setInterval(function(){incdec(a,b);},10000);
}

function sell(name){
	if (parseInt(name.innerHTML.split("/",1)) > 0){
		decrement(name)
    	var total = Number(money.innerHTML);
    	var price = Number(document.getElementById(name.id+"Sell").innerText.split("$")[1]);
    	total += price;
    	money.innerHTML = total.toFixed(2);
    }
}
