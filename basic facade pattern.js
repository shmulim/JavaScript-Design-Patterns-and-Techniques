function addEvent(element, eventName, func) {
    if (window.addEventListener) {
        element.addEventListener(eventName, func, false);
    } else if (window.attachEvent) {
        element.attachEvent('on' + eventName, func);
    } else {
        element['on' + eventName] = func;
    }
}

function arbitraryFunction() {
    alert('Event fired!');
}

// implementation
el = document.getElementById('id');
addEvent(el, 'click', arbitraryFunction);
