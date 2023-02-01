const rotationAmount = 6;
const message = 'MR UE AGF AR IMFQD';
let ciphertext = '';

for (let i = 0; i < message.length; i++) {

	const charCode = message.charCodeAt(i);

	console.log((charCode + rotationAmount) % 90);

	if (charCode === 32) {
		ciphertext += String.fromCharCode(charCode);
	} else {
		ciphertext += String.fromCharCode(
			((charCode + rotationAmount) <= 90)
				? charCode + rotationAmount
				: (charCode + rotationAmount) % 90 + 64
		);
	}
}

console.log(ciphertext);