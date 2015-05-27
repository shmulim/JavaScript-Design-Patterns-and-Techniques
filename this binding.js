// binding to the global object
function foo() {
  console.log(this);
}

foo(); // Window


// binding to an object
function foo(){
  console.log(this.a);
}

var bar = {
  a: 2,
  foo: foo
};

bar.foo(); // 2
