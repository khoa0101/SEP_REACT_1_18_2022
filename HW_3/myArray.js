Array.prototype.myFilter = function(callback){
  let result = [];
  
  for(let i = 0; i < this.length; i++){
    if (callback(this[i])) result.push(this[i]);
  }

  return result;
}

Array.prototype.myMap = function(callback){
  let result = [];

  for(let i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }

  return result;
}

Array.prototype.myReduce = function(callback, n){
  n ||= 0;
  let result = n; 

  for(let i = 0; i < this.length; i++){
    result = callback(result, this[i]);
  }

  return result;
}

Array.prototype.mySome = function(callback){
  for(let i = 0; i < this.length; i++){
    if (callback(this[i])) return true;
  }

  return false;
}

Array.prototype.myEvery = function(callback){
  for(let i = 0; i < this.length; i++){
    if (!callback(this[i])) return false;
  }

  return true;
}

myArray = [1, 2, 3, 4, 5]
myString = ['H','E','L','L','0'];

// Test section: 
// let result = myArray.myMap((n) => n + 'a');
// console.log(result);
// result = myArray.myFilter((n) => n % 2 === 1);
// console.log(result); 
// result = myArray.myReduce((a, b) => a + b, 'b');
// console.log(result);
// result = myArray.mySome((n) => n % 2 === 0);
// console.log(result);
// result = myArray.myEvery((n) => n % 2 === 0);
// console.log(result);