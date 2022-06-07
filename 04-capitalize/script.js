/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let arrStr = str.split(' ')
    let mapArr = arrStr.map(element => {
        return element.slice(0, 1).toUpperCase() + element.slice(1)
    });
    let joinMapArr = mapArr.join(' ')
    return joinMapArr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"