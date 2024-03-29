/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * .
 *
*/

function findVowels(str) {
    const strArr = str.toLowerCase().split('')
    const vowelsArr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
    const intersectionArr = vowelsArr.filter(item => strArr.includes(item));
    return intersectionArr.length
}



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3