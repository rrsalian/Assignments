function isValidPhone(p:string):boolean { 
    var regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;    
    return regex.test(p);
}

function isValid(p:string):boolean {
    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
  }


console.log("123-234-1234");

//module.exports = isValidPhone