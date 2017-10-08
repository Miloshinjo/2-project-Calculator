function clear() {
	if(reset){
		myCalculation = '';
		reset = false;
	}
}

// select all buttons and make them into a variable
var keys = document.querySelectorAll('.cbutton');
var myOutput = document.querySelector('.output');
var myCalculation = '';
var reset = false;

// loop through all the keys (innerHTML value is the one we want)

for (var i=0; i<keys.length; i++) {
	
	keys[i].addEventListener('click', function(){
	
		// get input and button values
		
	var keyValue = this.innerHTML;
		
	

	// clear	
	if (keyValue === 'C') {
		myCalculation = '';
		myOutput.innerHTML = '';
	}
	// calculate the result
  else if (keyValue === '=') {
		
		myCalculation = eval(myCalculation);
		
		reset = true;
		
		
	}
	// delete last digit
	else if (keyValue === 'del') {
		myCalculation = myCalculation.slice(0, -1);
	
	}
		
	else if (keyValue === 'sqRt') {
		
		myCalculation = Math.sqrt(myCalculation);
			
	}
	// negative or positive
	else if (keyValue === '+/-') {
			if (myCalculation > 0) {
				myCalculation = "-" + myCalculation;
				myOutput.innerHTML = myCalculation;
			}
			else if (myCalculation < 0) {
				myCalculation = myCalculation.replace("-", "");
				
			}
	}
	else {
		myCalculation += keyValue;
	
	
	}
	myOutput.innerHTML = myCalculation;
	
	clear();

		
	});
}

function cocatinate() {
	
	keybValue = myOutput.innerHTML;
	
	myCalculation += keybValue;

	myOutput.innerHTML = myCalculation;

}


document.addEventListener('keypress', function(e){
	if (e.keyCode === 49 || e.keyCode === 97) {
		myOutput.innerHTML = '1';
		cocatinate();
	}
});

document.addEventListener('keypress', function(e){
	if (e.keyCode === 50 || e.keyCode === 98) {
		myOutput.innerHTML = '2';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 51 || e.keyCode === 99) {
		myOutput.innerHTML = '3';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 52 || e.keyCode === 100) {
		myOutput.innerHTML = '4';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 53 || e.keyCode === 101) {
		myOutput.innerHTML = '5';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 54 || e.keyCode === 102) {
		myOutput.innerHTML = '6';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 55 || e.keyCode === 103) {
		myOutput.innerHTML = '7';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 56 || e.keyCode === 104) {
		myOutput.innerHTML = '8';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 57 || e.keyCode === 105) {
		myOutput.innerHTML = '9';
		cocatinate();
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 48 || e.keyCode === 96) {
		myOutput.innerHTML = '0';
		cocatinate();
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 109) {
		myOutput.innerHTML = '-';
		cocatinate();
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 107) {
		myOutput.innerHTML = '+';
		cocatinate();
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 106) {
		myOutput.innerHTML = '*';
		cocatinate();
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 111) {
		myOutput.innerHTML = '/';
		cocatinate();
	}
});

document.addEventListener('keydown', function(e){
	if (e.keyCode === 8) {
		
		myCalculation = myCalculation.slice(0, -1);
		myOutput.innerHTML = myCalculation;
	}
});
document.addEventListener('keypress', function(e){
	if (e.keyCode === 13) {
		
		myCalculation = eval(myCalculation);
		
		myOutput.innerHTML = myCalculation;
		
		reset = true;
		
		clear();
		
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 110 || e.keyCode === 190) {
		myOutput.innerHTML = '.';
		cocatinate();
		
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 46) {
		myCalculation = '';
		myOutput.innerHTML = '';
		
		
	}
});
document.addEventListener('keydown', function(e){
	if (e.keyCode === 81) {
		
		myCalculation = Math.sqrt(myCalculation);
		myOutput.innerHTML = myCalculation;
		reset = true;
		
		clear();
		
	}
});



