(function executeThis() {

    function FizzBuzz(numCount) {
        if (numCount % 15 == 0) {
            document.write("FizzBuzz ");
        } else if (numCount % 3 == 0) {
            document.write("Fizz ");
        } else if (numCount % 5 == 0) {
            document.write("Buzz ");
        } else {
            document.write(numCount + ' ');
        }
    }

    for (var numCount = 1; numCount < 100; numCount++) {
        FizzBuzz(numCount);
    }
}());