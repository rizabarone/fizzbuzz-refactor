$(document).ready(

function() {

var display = function(numCount) {
for (numCount =1; numCount <100 ; numCount++) {
		

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

		
 

