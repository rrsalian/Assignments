function checkPassword( email, password) {
    if ((email === "shawn@psych.com") && (password === "tearsforfears"))
        return "Welcome Shawn";
    return "Unauthorized";
}

module.exports = {
    checkPassword
}