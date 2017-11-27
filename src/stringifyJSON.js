// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//inputs could be any data structure from an object
//outputs should be a string with the structures in quotes "[thing1, thing2]"
  var outputString = "";

  if(typeof obj === "number"){
    outputString += obj;
  } else if(typeof obj === "string"){
    outputString += '"' + obj + '"';
  } else if(typeof obj === "boolean"){
    outputString += obj;
  } else if(Array.isArray(obj)){
    outputString += "[";
    for(var i = 0; i < obj.length; i++){
      outputString += stringifyJSON(obj[i]) + ",";  
    }  
    if(obj.length){
      outputString = outputString.slice(0,outputString.length - 1);
    }
    outputString += "]";
  } else if(obj === null){
    outputString += "null";
  } else if(typeof obj === "undefined"){
    outputString += "undefined";
  } else if(typeof obj === "object"){
    outputString += "{";

  } 

  return outputString;
};
