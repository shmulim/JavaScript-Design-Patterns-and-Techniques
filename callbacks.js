function foo(argOne, argTwo, callback){
  console.log('output: ' + argOne + ' and ' + argTwo);
  if (callback && typeof(callback) === 'function'){
    callback();
  }
}

foo('argOne', 'argTwo', function(){
  console.log('running the callback');
});
