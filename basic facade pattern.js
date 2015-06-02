function addEvent(element, eventName, callbackFn) {
    if (window.addEventListener) {
        element.addEventListener(eventName, callbackFn, false);
    } else if (window.attachEvent) {
        element.attachEvent('on' + eventName, callbackFn);
    } else {
        element['on' + eventName] = callbackFn;
    }
}

function arbitraryFunction() {
    alert('Event fired!');
}

// implementation
el = document.getElementById('id');
addEvent(el, 'click', arbitraryFunction);
