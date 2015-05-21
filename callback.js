function foo(paramOne, paramTwo, callback){
  console.log('output: ' + paramOne + ' and ' + paramTwo);
  if (callback && typeof(callback) === 'function'){
    callback();
  }
}

foo('argOne', 'argTwo', function(){
  console.log('running the callback');
});
