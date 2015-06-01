function addEvent(element, eventName, callback) {
    if (window.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (window.attachEvent) {
        element.attachEvent('on' + eventName, callback);
    } else {
        element['on' + eventName] = callback;
    }
}

function arbitraryFunction() {
    alert('Event fired!');
}

// implementation
el = document.getElementById('id');
addEvent(el, 'click', arbitraryFunction);
