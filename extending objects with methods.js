String.prototype.reverseString = function(){
  return this.split('').reverse().join('');
};

'hello world'.reverseString();
// dlrow olleh
