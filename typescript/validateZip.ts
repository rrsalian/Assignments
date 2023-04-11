function isValidZip(z:string):boolean { 
    var regex = /^\d{5}(-\d{4})?(?!-)$/;    
    return regex.test(z);
}

module.exports = isValidZip;