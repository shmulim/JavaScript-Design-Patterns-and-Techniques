function* gen() {
  console.log('hello');
  yeild = null;
  console.log('world');
}

it = gen();
it.next(); // hello 
it.next(); // world
