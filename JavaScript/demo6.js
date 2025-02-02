const uname = document.querySelector('#uname')
const age = document.querySelector('#age')
const gender = document.querySelector('#gender')
const money = document.querySelector('#money')
const city = document.querySelector('#city')
const count = document.querySelector("#count")

const info = document.querySelector('.info');
const tbody = document.querySelector('.infoTable tbody')

let data = JSON.parse(localStorage.getItem('data')) || []
console.log(`initData: ${data}`)
render(data)

info.addEventListener('submit', function (e) {
    e.preventDefault()
    submitInfo()
    this.reset()
    render(data)
})

tbody.addEventListener('click', function (e) {
    if (e.target.nodeName === 'A') {
        if (confirm("你确定要删除这条数据吗?")) {
            data.splice(e.target.dataset.id, 1)
            render(data)
        }
    }
})

function submitInfo() {
    let n = uname.value
    let a = age.value
    let m = money.value
    if (!(n && a && m)) {
        return alert('请填写完整信息')
    }
    data.push({
        id: data.length ? data[data.length - 1].id + 1 : 1,
        name: n,
        age: a,
        gender: gender.value,
        money: m,
        city: city.value
    })
}


function render(data) {
    localStorage.setItem('data', JSON.stringify(data))
    const result = data.map((element, index) => {
        return `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.gender}</td>
                <td>${element.money}</td>
                <td>${element.city}</td>
                <td>
                    <a href="javascript:" data-id="${index}">删除</a>
                </td>
            </tr>
            `
    })
    
    console.log(result.join(''))
    tbody.innerHTML = result.join('')
    count.innerHTML = `共有 ${result.length} 条数据`

    // table.innerHTML = ''
    // for (let i = 0; i < data.length; i++) {
    //     const tr = document.createElement('tr')
    //     tr.innerHTML = `
    //         <td>${i}</td>
    //         <td>${data[i].uname}</td>
    //         <td>${data[i].age}</td>
    //         <td>${data[i].gender}</td>
    //         <td>${data[i].money}</td>
    //         <td>${data[i].city}</td>
    //         <td>
    //             <a href="javascript:" date-id="${i}">删除</a>
    //         </td>
    //         `
    //     console.log(tr)
    //     table.appendChild(tr)
    // }
}