const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];

    array.forEach( item => {
        if (!args.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;
};

//shorter better answer
// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }

//notes:
//realise I'm weak in Array methods, will need to work on that.

// Do not edit below this line
module.exports = removeFromArray;
