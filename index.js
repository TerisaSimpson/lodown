'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: take a value and return that input value unchanged. 
 * @param {*} value: single value that can be any datatype 
 * @return {*}: The input value unchanged
 * 
 */
 
//  _.identity = function(value){
//     return value;
// };
 
 function identity(value){
    return value;
};

module.exports.identity = identity;







/**
 * typeOf: takes any data type
 * @param {*} value: takes a value and defined the data type
 * @return {string}: returns a string with data type
 */

function typeOf(value){
    if (typeof value === "string"){ 
        return "string" 
    } else if (Array.isArray(value)) { 
        return "array" 
    } else if (typeof value === "undefined"){ 
        return "undefined" 
    } else if (typeof value === "number"){ 
        return "number" 
    } else if (typeof value === "boolean"){ 
        return "boolean" 
    } else if (value === null){ 
        return "null" 
    } else if (typeof value === "function"){ 
        return "function" 
    } else if (value instanceof Date){ 
        return "date" 
    } else if (typeof value === "object"){ 
        return "object" 
    }
}

module.exports.typeOf = typeOf;






/**
 * first: return the nth first elements based on the arguemnet given to the number. if the number is neagtive, it returns an empty list. if the number is greater than the array.length, it returns the whole array.
 * @param {array} arr: array that is looped
 * @param {number} num: number of elements
 * @return {array}: returns new array
 */

function first(array, number){ 
    if(!Array.isArray(array)){ 
        return [] 
    } else if (typeof number === "undefined"){ 
        return array[0] 
    } else { 
        return array.splice(0, number) 
    }
}

module.exports.first = first;


/**
 * last: returns the last nth elements of an array, based on the numbers arguments. if the number is negative, it returns an empty list. if the number is greater than the array.length, it returns the whole array.
 * @param {array} arr: array is looped
 * @param {number} num: number of elements
 * @return {array}: returns new array
 */
 function last(array, number){
    if(!Array.isArray(array)){
        return []; 
    }else if(number > array.length ){ 
        return array; 
    }else if(number){ 
        return array.splice(array.length - number, number); 
    }else if(!number){ 
        return array.pop(); 
    }
};


module.exports.last = last;



/**
 * indexOf: returns the index number where the value's arguments first appears in the array. if the value does not exit in the array, -1 is returned
 * @param {array} arr: looped through array
 * @param {string} value: any data type
 * @return {number}: returns a number. either the index position or -1 if the value is not the array
 */
 function indexOf(array, value){ 
    for (var i = 0; i <= array.length-1; i++){ 
        if (array[i] === value){ 
            return i
        } 
    } if (value !== array[i]){ 
        return -1
    }
}

module.exports.indexOf = indexOf;


/**
 * contains: cycles through an array to see if it contains a value
 * @param {array} arr: looped
 * @param {*} value: value of any data type
 * @return {boolean} true or false: a boolean if the value arguments is in the array
 */
 function contains(array, value){
    return array.includes(value) ? true : false 
}


module.exports.contains = contains;






/**
 * unique: loops through the array and remove any duplicate values
 * @param {array} arr: loops through array with duplicates
 * @return {array} newArr: an array without duplicate values
 */
 function unique(array){

var newArray = [] 

for (var i = 0; i < array.length; i++){ 
    if (indexOf(newArray, array[i]) === -1){ 
        newArray.push(array[i]) 
    }
}

return newArray 
}


module.exports.unique = unique;




/**
 * filter: iterate through an array and a function acts upon each element, index, and entire array, if the test function returs true, that element, index, or array wil be pushed into a new array
 * @param {array or object} arr: collection to filter through
 * @param {function} func: performs what the statment is
 * @return {array} newArr: an array with all of the passing values
 */
 function filter(array, func){
    var newArray = [] 
    
    each(array, function(e, i, a){ 
        if (func(e, i, a)){ 
            newArray.push(e) 
        }
    });
    return newArray 
}


module.exports.filter = filter;



/**
 * reject: iterates through an array, and a logical function tested is acted on the arguments. if the test returns false, the element, index, or array are pushed into a new array
 * @param {array} arr: array that is looped
 * @param {function} f: performs what the statment is
 * @return {array}:  an array of false arguments
 *
 */
 function reject(array, func){
    var newArray = [] 
    filter(array, function(e, i, a){ 
        if (!func(e,i,a)){ 
            newArray.push(e) 
        }
    })
    return newArray
}


module.exports.reject = reject;


/**
 * partitiion: iterates through an array with a function acting on each element, index, and entire array, in the array
 * @param {array} arr: array is looped 
 * @param {function} f:
 * @return {array}: returns truthy and falsey values in two sub arrays in a larger array
 
 *
 */
 function partition(array, func){
    var truthy = [] 
    var falsey = [] 
    
    each(array, function(e, k, a){ 
        if (func(e,k,a)){ 
            truthy.push(e) 
        } else {
            falsey.push(e) 
        }
    })
    
    var bothArrays = [] 
    bothArrays.push(truthy, falsey) 
    return bothArrays 
}
module.exports.partition = partition;




/**
 *map: a function is called for each element in a collection and the return value of each function call will be in a new array
 * @param {array or object} collection: iterates over
 * @param {function} f: performs what the statment is
 * @return {array}: a new array with the functioned elements
 */
 function map(collection, func){
    var newArray = [] 
    
    
    
    if (Array.isArray(collection)){ 
        for (var i = 0; i <= collection.length-1; i++){ 
           newArray.push(func(collection[i], i, collection)) 
        }
    }
   else if (typeof collection === "object"){ 
        for (var key in collection){ 
            newArray.push(func(collection[key], key, collection)) 
        }
    }
    return newArray //return array
}

module.exports.map = map;



/**
 *pluck: it cycles through an object to see if a given property is in the objects in the array and if the key exist, the values are pushed into an array
 * @param {collection} arr, prop: array with objects
 * @param {string}: a string with the property key
 * @return {array} newArr: returns an array containing the values of the identical keys
 *
 */
 function pluck(array, prop){ 
    return  map(array, function(e, i, a){ 
        return e[prop]
    })
 }
       

module.exports.pluck = pluck;



/**
 * every: function will call upon each element in the collection and if all of the return values are true, true will be returned. if cuntion doesnt return a boolean, there will be no side effects. if the function is not given, it should return true or false for the truthy or falsey results.
 * @param {collection} collection: an array or object
 * @param {function} func: statement that peforms task
 * @return {boolean} true or false: a boolean if true or false
 */
  function every(collection, func) {
        if (func === undefined) {
        for (let i in collection) {
            if ((!!collection[i]) === false) {
                return false;
            }
        }
        return true;
    } else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === false) {
                return false;
            }
        }
        return true;
    } else {
        for (let key in collection) {
            if (func(collection[key], key, collection) === false) {
                return false;
            }
        }
        return true;
    }                                                   
}

module.exports.every = every;




/**
 * some: function will call upon each element in the collection if all of the returning values are true. true will be returned. if no function is given, it should return true or false for the truthy or falsey results. 
 * @param {collection} collection: array or object
 * @param {function} func: statments that perform a task
 * @return {boolean} true or false: a boolean value
 */
  function some(collection, func) {
        if (func === undefined) {
        for (let i in collection) {
            if ((!!collection[i]) === true) {
                return true;
            }
        }
        return false;
    } else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === true) {
                return true;
            }
        }
        return false;
    } else {
        for (let key in collection) {
            if (func(collection[key], key, collection) === true) {
                return true;
            }
        }
        return false;
    }                                                   
}

module.exports.some = some;




/**
 * reduce: calls a function for every element passing the arguments, takes an array of values and reduce them to a single valuse
 * @param {collection} arr: array that is looped
 * @param {function} funct: statement that performs tasks
 * @param {*} seed: seed that will be included in call
 * @return {*}: the return value of the final function call
 */

function reduce(array, func, seed){
    
    var result = 0
    var i = 0
    if (typeof seed === "number"){
        result = seed
    } else {
        result = array[0] 
        i = 1
    }
    while (i <= array.length-1){
      result = func(result, array[i], i)
      i++
    }
    return result
}



module.exports.reduce = reduce;



/**
 * extend: updates the first objects value with anothe robject value, if they share a key. if the key does not exist in the first object, the property will be added
 * @param {objects}: multiple objects
 * @return {object}: an object with the updated informaton
 */
function extend(obj1, ...otherObjs){
    each(otherObjs, function(e, i, a){
        for (let key in e){
            obj1[key] = e[key]
        }
        })
        return obj1
    }
    
module.exports.extend = extend;

