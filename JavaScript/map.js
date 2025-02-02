const arr = ['item1', 'item2', 'item3']
const newArr = arr.map((element, index) => {
    console.log(`element: ${element}`)
    console.log(`index: ${index}`)
    return 'new ' + element
})
console.log(newArr);


console.log(arr.join(''))
console.log(arr.join(' - '))


const test = [
    {name: 'name',age: 'age',gender: 'gender',city: 'city'},
    {name: 'name',age: 'age',gender: 'gender',city: 'city'},
    {name: 'name',age: 'age',gender: 'gender',city: 'city'},
    {name: 'name',age: 'age',gender: 'gender',city: 'city'}
]

let str = ''

const result = test.map((element, index) => {
    console.log(element)
    console.log(element.name)
    console.log(element.age)
    console.log(element.gender)
    console.log(element.city)
    console.log(index)
    return `
            <td>${index}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.gender}</td>
            <td>${element.city}</td>
            <td>
                <a href="javascript:" date-id="${index}">删除</a>
            </td>
            `
})

console.log(result.join(''))
