const reverseString = function(string) {
    let reverseString = '';
    for (let i = string.length; i >= 0; i--){
        reverseString += string.charAt(i);
    };

    return reverseString;

    //Answer solution :
    //return string.split('').reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
