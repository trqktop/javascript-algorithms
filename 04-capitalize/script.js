/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const arrStr = str.split(' ')
    const mapArr = arrStr.map(element => {
        return element.slice(0, 1).toUpperCase() + element.slice(1)
    });
    const joinMapArr = mapArr.join(' ')
    return joinMapArr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"