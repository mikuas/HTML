
function getRandom(start = 0, end) {
    if (end === undefined) {
        end = start
        start =0
    }
    return Math.floor(Math.random() * (end - start) + start)
}

function miku(selector) {
    return document.querySelector(selector)
}

function timeMode(time, func, showLog=false) {
    return setInterval(function () {
        if (showLog) {
            console.log(func)
        } else {
            func()
        }
    }, time)
}

function addEvent(obj, type, func) {
    return obj.addEventListener(type, func)
}

function get() {

}