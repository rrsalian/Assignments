
let rotationAmount = 18;
const message = 'SX AK GML GX OSLWJ' /*'MR UE AGF AR IMFQD' */ ;   /* SX AK GML GX OSLWJ */
let ciphertext = '';
let i = 0;

    
for (i = 0; i < message.length; i++) {

	const charCode = message.charCodeAt(i);

	if (charCode === 32) {
		ciphertext += String.fromCharCode(charCode);
	} else {
		ciphertext += String.fromCharCode(
			(90 + (charCode - 64 ) <= 90 + rotationAmount)
				? (90 + (charCode - 64 ) - rotationAmount)
				: charCode - rotationAmount
		);        
	}
}
console.log(ciphertext);

