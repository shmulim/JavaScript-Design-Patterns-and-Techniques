function foo(optionalArg){
  optionalArg = (typeof optionalArg === 'undefined') ? 'default' : optionalArg;
  console.log(optionalArg);
}

foo(); // default
foo('argument'); // argument
