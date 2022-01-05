module.exports = function reverse (n) {
	let input = n;
	let number = Math.abs(input);
	let string = number.toString();
	let transform = 0;
	let output = 0;
	// console.log(string);
		for (let i = 1; i <= string.length; i++) {
			transform = (number % (10 ** i));
			transform = (Math.trunc((transform * 10) / (10 ** i))) * (10 ** (string.length - i));
			output += transform;
		}
    // console.log(output);
	return output;
}
