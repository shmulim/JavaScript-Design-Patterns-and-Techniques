function foo() {
  return Array.prototype.slice.call(arguments).sort();
}

foo('argOne', 'argTwo', 'argThree');
// ["argOne", "argThree", "argTwo"]
