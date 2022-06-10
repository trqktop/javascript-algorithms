/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {//решение где-то рядом...
    let countArr = [];
    for (let i = 1; i <= n; i++) {
        countArr.push(i)
    }
    let joinArr = countArr.join('')
    let splitArr = joinArr.split('')
    let zeroCountArr = splitArr.filter((item) => item == 0 ? true : false)
    return zeroCountArr.length
}



console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
