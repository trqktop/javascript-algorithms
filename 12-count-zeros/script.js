/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/
/*
function countZeros(n) {//решение где-то рядом...
    let count = 0;
    for (let i = 1; i <= n / 10; i++) {
        count += 1
    }
    let nStr = Number((n + '').slice(0, 1))
    return n >= 100 ?
        count += (1 * nStr) : count
}

// Протестируйте решение, вызывая функцию с разными аргументами:
function countZeros(n) {
    let nArray = (n + '').split('')
    nArray.length <= 2 ?
        nArray = nArray.slice(0, -1) : nArray = nArray.map((item, index) => index == 0 && item != 1 ? item * 2 : item).slice(0, -1)
    let nArrayNumb = Number(nArray.join('' + ''))
    nArrayNumb >= 100 ?
        nArrayNumb  : nArrayNumb
    return nArrayNumb
}


console.log(countZeros(100)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(342)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
*/