
function getRandom(start = 0, end) {
    if (end === undefined) {
        end = start
        start = 0
    }
    return Math.floor(Math.random() * (end - start) + start)
}

// function

function miku(selector) {
    return document.querySelector(selector)
}

function mikus(selectors) {
    return document.querySelectorAll(selectors)
}

function timeMode(time, functions, showLog = false) {
    return setInterval(function () {
        if (showLog) {
            console.log(functions)
            functions()
        } else {
            functions()
        }
    }, time * 1000)
}

function timeModes(time = [] || '', functions = []) {
    let arr = []
    if (time.length === 1 || typeof time === "number") {
        for (let i = 0; i < functions.length; i++) {
            arr.push(setInterval(functions[i], time[0] * 1000 || time * 1000))
        }
    } else {
        for (let i = 0; i < time.length; i++) {
            arr.push(setInterval(functions[i], time[i] * 1000))
        }
    }
    return arr
}

function timeClears(arr = [] || 0) {
    if (typeof arr !== typeof []) {
        clearInterval(arr)
    } else {
        for (let i = 0; i < arr.length; i++) {
            clearInterval(arr[i])
        }
    }
}

function addEvent(obj, type, functions, bool = false) {
    return obj.addEventListener(type, functions, bool)
}

function addEvents(objArr = [], type, functions, bool = false) {

    if (typeof type !== typeof [] && typeof functions !== typeof []) {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type, functions, bool)
        }
    } else if (typeof type !== typeof []) {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type, functions[i], bool)
        }
    } else if (typeof functions !== typeof []) {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].addEventListener(type[i], functions, bool)
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


