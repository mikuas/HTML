// 设置随机数生成的种子
const randomSeed = Date.now();

// 生成一个随机数字串的函数
function generateRandomString(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// 生成10万个随机数字串
const numberOfStrings = 100000000;

for (let i = 0; i < numberOfStrings; i++) {
    console.log(generateRandomString(8))
}




