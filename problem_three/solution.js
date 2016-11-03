var number = 600851475143;

for(i = 2; i < number; i++) {
	if(number % i === 0) {
		number = number / i;
	}
}

console.log(number);