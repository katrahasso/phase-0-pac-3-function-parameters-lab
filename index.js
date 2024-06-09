function introduction(name){
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}

// Example usage:
console.log(introductionWithLanguage("katra", "JavaScript"));

function introductionWithLanguage(name = "Guest", language) {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}

// Example usage:
console.log(introductionWithLanguageOptional("katra")); // Output: Hi, my name is katra and I am learning to program in JavaScript.
console.log(introductionWithLanguageOptional("kadija", "Css")); // Output: Hi, my name is kadija and I am learning to program in css.


