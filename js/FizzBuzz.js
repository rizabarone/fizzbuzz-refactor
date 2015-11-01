$(document).ready(function() {

	for (var numCount = 1; numCount < 100; numCount++) {
		var display = numCount;
		if (numCount % 3 == 0){
			display = "Fizz";
		}
		if (numCount % 5 == 0) { 
			display = "Buzz";
		}        
		if (numCount  % 3 == 0 && numCount % 5 == 0)  { 
			display = "FizzBuzz";
		}
		console.log(display);
	}
		
});