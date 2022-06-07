/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    num % 3 === 0 && num % 5 == 0
        ? console.log('fizzbuzz')
        : num % 3 === 0
            ? console.log('fizz')
            : num % 5 === 0
                ? console.log('buzz')
                : console.log(num);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

for (let i = 1; i <= 15; i++) {
    fizzBuzz(i)
}