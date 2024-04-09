"use strict";

const regex = new RegExp(/([^\w\s]|_)/g);

function convertingStringToArray(str) {
  let removePunctuation = str.replace(regex, "");
  let array = removePunctuation.split(" ");
  return array;
}

console.log(
  convertingStringToArray(
    "The string that is being converted to an array is separated by commas! And familiar? The letters..."
  )
);
