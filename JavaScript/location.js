const href = document.querySelector('a')
const btn = document.querySelector('button')
const test = document.querySelector('#test')

test.addEventListener('click', () => {
    console.log(location.hash);
})

console.log(location);

btn.addEventListener('click', () => {
    // e.preventDefault()
    console.log(location.search);
})

let time = 5

let id = setInterval(() => {
    time--
    if (time === 0) {
        clearInterval(id)
        // location.href = href.href
    }
    href.innerHTML = `${time}秒自动跳转`
}, 1000);