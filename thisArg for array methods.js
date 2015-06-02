var obj = {
  a: 42,
  b: 43
};

function arbitraryFn(arr){
  return arr.map(function(){
    return this.a; //42
  }, obj); // <-- defines the 'this' keyword
}

arbitraryFn([34, 42, 56]); // [42, 42, 42]
