function namedParams(options) {
  // assign some defaults where the user's has not provided a value
  opts = {}
  opts.foo = options.foo || 0;
  opts.bar = options.bar || 1;
  opts.example = options.example || 'pizza'
 
  alert("foo is " + opts.foo + ", bar is " + opts.bar + ", and example is " + opts.example);
}
 
namedParams({example: "fries", bar: 3.14});
// "foo is 0, bar is 3.14, and example is fries"
