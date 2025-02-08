/*const str = 'new item, test'
// 定义规则
const element = /item/
// 是否匹配
// ele.test(被检测的字符串)
console.log(element.test(str))

console.log(element.exec(str))*/

console.log(/^哈哈$/.test('哈哈'))
console.log('----------')
console.log(/^哈哈+哈+$/.test('哈哈哈'))
console.log('----------')
// /d 表示 0-9
console.log(/^[a-z]\d?[A-Z]+$/.test('a0ASA'))
console.log('----------')
// ^ 在 [] 表示取反
console.log(/^[^a-z\d]\d?[A-Z]+$/.test('#0ASA'))

console.log('----------')
// 特殊符号 _-些最后
console.log(/^[a-zA-Z\d_]{6,16}$/.test("114514_"))
