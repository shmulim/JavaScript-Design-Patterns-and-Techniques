// subject base class
function Subject(){
    this.observerList = [];
}

Subject.prototype.addObserver = function(observer){
    this.observerList.push(observer);
    console.log('added new observer');
};

Subject.prototype.removeObserver = function(observer){
    for (var i = 0, len = this.observerList.length; i < len; i++){
        if (this.observerList[i] === observer){
            this.observerList.splice(i, 1);
            console.log('removed existing observer');
        }
    }
};

Subject.prototype.notifyObservers = function(){
    for(var i = 0, len = this.observerList.length; i < len; i++){
        this.observerList[i].update(this.getInstanceName());
    }
};

Subject.prototype.getInstanceName = function(){
    for (var instance in window) {
        if (window[instance] === this) {
            return instance;
        }
    }
};


// observer base class
function Observer(){}

Observer.prototype.update = function(subjectInstanceName){
    console.log('observer ' + this.getInstanceName() + ' notified by ' + subjectInstanceName);
};

Observer.prototype.getInstanceName = function(){
    for (var instance in window) {
        if (window[instance] === this) {
            return instance;
        }
    }
};


// implementation:
var subjectOne = new Subject(),
    subjectTwo = new Subject(),
    observerOne = new Observer(),
    observerTwo = new Observer();

subjectOne.addObserver(observerOne);
subjectTwo.addObserver(observerOne);
subjectOne.addObserver(observerTwo);
subjectOne.removeObserver(observerTwo);

subjectOne.notifyObservers();
subjectTwo.notifyObservers();
