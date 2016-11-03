var a = 1;
var b = 2;
var fibonacci = 0;
var runningSum = 2;

for(i = 1; fibonacci <= 4000000; i++) {
	fibonacci = a + b;
	a = b;
	b = fibonacci;

	if(fibonacci % 2 === 0) {
		runningSum += fibonacci;
	}
}

console.log(runningSum);