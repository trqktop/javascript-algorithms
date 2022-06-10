/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    str = str.toUpperCase().replace(',', '').replace('!', '').replace(' ', '').replace(' ', '')
    let reverseStr = str.split('').reverse().join('')
    return reverseStr == str ? true : false;
}
/*
// Протестируйте решение, вызывая функцию с разными аргументами:
function palindrome(str) {
    if (str == ''){return true}else{
    str = str.toUpperCase().replace(',', '').replace('!', '').replace(' ', '').replace(' ', '')
    let reverseStr = [...str].reduce((prev, item) => item + prev)
    return str == reverseStr ?
        true : false}

}
*/

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!'));

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/