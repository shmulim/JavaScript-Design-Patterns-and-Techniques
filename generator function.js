function* gen() {
  console.log('hello');
  yield null;
  console.log('world');
}

it = gen();
it.next(); // hello 
it.next(); // world
