'use strict';

function Parent(name, children){
  this.name = name;
  this.children = children;
  this.updateChildren();
}

Parent.prototype.updateChildren = function(){
  var parent = this;
  this.children.forEach(function(child){
    child.parent = parent;
  });
};

function Child(name){
  this.name = name;
  this.parent = undefined;
}

var jim = new Child('Jim');
var john = new Child('John');
var bob = new Parent('Bob', [jim, john]);

console.log(bob.children); // [Child, Child]
console.log(jim.parent); // Parent {name: "Bob", children: Array[2]}
console.log(john.parent); // Parent {name: "Bob", children: Array[2]}
