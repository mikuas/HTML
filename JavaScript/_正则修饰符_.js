// i 修饰符
console.log(/^java$/.test('java'))
console.log('----------')
console.log(/^java$/i.test('JAVA'))

// replace
console.log('----------')
const str = 'java <<..>> [[]] JAVA'
console.log(str.replace(/java/ig, 'python'))
console.log(str.replace(/java|JAVA/g, 'python'))

// g 修饰符
console.log('----------')
console.log(/^java$/g.test('java'))