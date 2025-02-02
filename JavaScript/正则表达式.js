const str = 'new item, test'
// 定义规则
const element = /item/
// 是否匹配
// ele.test(被检测的字符串)
console.log(element.test(str))

console.log(element.exec(str))


// 边界符
console.log(/114/.test(114514))
console.log(/^界界$/.test('界界'))
console.log('----------')

// 量词
console.log(/^1*$/.test('1145141'))
console.log(/^1+$/.test('1145141'))
console.log(/^1?\d*$/.test('15345'))
console.log(/^1{3}$/.test('1145141'))

// 字符类
console.log('----------')
console.log(/[abc]/.test('aaabb'))
console.log(/[abc]/.test('aaabbcc'))
console.log(/[a-z]/.test('aaabbcc'))
console.log(/[A-Z]/.test('ddeegg'))
console.log(/^[abc]$/.test('abc'))


console.log('----------')
console.log(/^[a-zA-Z0-9]+$/.test('123re12eG'))

console.log(/^[1-9][0-9]{4,}$/.test(1145))





