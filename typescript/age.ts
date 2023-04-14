function isAdult (age:number):boolean {
    if (age >= 18) 
        return true;
    else
        return false;
}

console.log(isAdult(18));
//module.exports = isAdult