var palindrome = 0;
var largest_palindrome = 0;

function reverse(number) {
	n = number + "";
	return n.split("").reverse().join("");
};

var start = performance.now();

for(i = 999; i >= 100; i--) {
	for(j = 999; j >= 100; j--) {
		number = i * j;
		if(number == reverse(number)) {
			palindrome = number;
			if(palindrome > largest_palindrome) {
				largest_palindrome = palindrome;
			}
		};
	};
};

var end = performance.now();

console.log(largest_palindrome);
console.log(end - start + " ms.");