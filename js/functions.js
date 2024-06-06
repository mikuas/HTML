
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

function mikus(selector) {
    return document.querySelectorAll(selector)
}

function timeMode(time, functions, showLog=false) {
    return setInterval(function () {
        if (showLog) {
            console.log(functions)
        } else {
            functions()
        }
    }, time)
}

function addEvent(obj, type, functions, bool = false) {
    return obj.addEventListener(type, functions, bool)
}

function addEvents(objArr = [], type = [], functions = [], bool = false) {

    if (type.length === 1) {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type[0], functions[i], bool)
        }
    } else if (functions.length === 1) {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type[0], functions[0], bool)
        }
    } else {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type[i], functions[i], bool)
        }
    }
}

function stopBubble(element) {
    return element.stopPropagation()
}