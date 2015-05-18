var x = 'foo';

function hoistingExample(){
  console.log(x);
  var x = 'bar';
}

hoistingExample();
// undefined
