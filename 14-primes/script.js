/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    const numArr = [2, 3]

    for (let i = 4; i <= num; i++) {
        if (i != 2 && i % 2 !== 0) {
            numArr.push(i)
        }
    }
    const numArrFilter = numArr.filter((item) => item != 5 ? item % 5 : item).filter((item) => item != 3 ? item % 3 : item);
    if (num <= 0) { return [] }
    return numArrFilter
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(2)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]