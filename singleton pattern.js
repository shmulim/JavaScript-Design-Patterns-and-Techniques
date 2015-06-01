var singleton = (function(){

    var instance;
    var _privateVariable = 'foo';

    function init(){
        return _privateVariable;
    }

    return{
        getInstance: function(){
            if (!instance){
                instance = init();
            }
            return instance;
        }
    }
})();

// Usage
var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();

console.log(instance1); // foo
console.log(instance2); // foo
