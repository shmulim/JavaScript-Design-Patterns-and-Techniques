function foo(name, link){
    var self = this; // <-- alias here
    this.name = name || 'name';
    this.link = link || 'link';
    this.init = function(){
        var div = document.createElement('div');
        div.setAttribute('id', name);
        div.innerHTML = this.name;
        document.body.appendChild(div);
        div.addEventListener('click', function(){
        console.log(self.link); // <-- references the 'this' operator of the foo scope rather than the direct function
        }, false);
    };
}

window.onload = function(){
    foo1 = new foo('name 1', 'link 1').init();
    foo2 = new foo('name 2', 'link 2').init();
};
