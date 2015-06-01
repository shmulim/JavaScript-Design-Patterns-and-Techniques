function makeAdder(x) {
    function add(y) {
        return x + y;
    }
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(1)); // 2
console.log(plusTen(1)); // 11
