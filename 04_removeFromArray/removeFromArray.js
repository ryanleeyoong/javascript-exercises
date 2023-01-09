const removeFromArray = function(array, arg) {
    let index;
    let newArray;

    index = array.indexOf(arg);
    newArray = array.splice(index,1);

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
