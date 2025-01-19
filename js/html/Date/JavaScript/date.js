
// 获得当前时间
let date = new Date()
console.log(date)

// 获得指定时间
date = new Date('2022-5-17 08:30:25')
console.log(date)

function getTime (date) {
    // 获取年份
    const year = date.getFullYear() // 获得4为年份
    // 获得月份
        const month = date.getMonth() + 1 // 取值为0-11
    // 获取月份中的每一天
        const day = date.getDate()
    // 获取星期
        const week = date.getDay() // 取值为0-6
    // 获取小时
        const hour = date.getHours() // 取值为0-23
    // 获取分钟
        const minute = date.getMinutes() // 取值为0-59
    // 获取秒数
        const second = date.getSeconds() // 取值为0-59
    console.log(`年: ${year}, 月: ${month}, 月每一天: ${day}, 星期: ${week}, 小时: ${hour}, 分钟: ${minute}, 秒: ${second}`)
    return {
        'year': year,
        'month': month,
        'day': day,
        'week': week,
        'hour': hour,
        'minute': minute,
        'second': second
    }
}

function getMyDate(result) {
    // 转为 YYYY-MM-DD HH:mm
    const year = result.year
    const list = [result.month, result.day, result.hour, result.minute]
    // const zhList = ['月', '天', '时', '分']

    let time = ''
    for (let index = 0; index < list.length; index++) {
        if (list[index] < 10) {
            list[index] = `0${list[index]}`
        }
        index === 2 ? time += ` ${list[index]}` : time += `-${list[index]}`
    }
    return year + time
}

date = new Date('2008-08-08 08:08:08')
const result = getTime(date)

console.log(getMyDate(result))


// 时间戳

console.log(+new Date())



