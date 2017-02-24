let chalk = require('chalk');

function myEvery(array, acc) {
  let result = true;
  if(acc !== undefined) {
    result = acc;
  }

  if(!array || array.length === 0) {
    return result;
  } else {
    return myEvery(array.slice(1), result && array[0]);

    // if(array.length == 1) {
    //   return array[0];
    // } else if(array.length == 2) {
    //   return array[0] && array[1];
    // } else if(array.length == 3) {
    //   return array[0] && array[1] && array[2];
    // }
  }
}

module.exports = {
  myEvery: myEvery
};