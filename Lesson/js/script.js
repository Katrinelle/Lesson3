// Масиви

//let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits); // "Apple", "Orange", "Plum"
// // alert(fruits[1]); // Orange у вспліваючому вікні
// fruits[2] = "Pear";
// console.log(fruits); // "Apple", "Orange", "Pear" - заміна третього елементу
// fruits[3] = "Lemon";
// console.log(fruits); // "Apple", "Orange", "Pear", "Lemon" - додався "Lemon"

// alert(fruits.length); // 4 - кількість елементів

// Методи масиву
// push() - додає з кінця
// pop() - видаляє з кінця
// shift() - відаляє з початку
// unshift() - додає на початок

// splice() - вміє все arr.splice(position,num)
// position - позиція індексу
// num - кількість елементів
// let arr = ["I", "study", "JavaScript"];
// console.log(arr); // "I", "study", "JavaScript" з нумервцією від 0
// arr.splice(1, 1);
// console.log(arr); //"I", "JavaScript" з нумерацією від 0

//slice() - копіює елементи arr.slice(begin, end) - від begin до end - не включаючи end
// arr.slice(1, 3);
// console.log(arr);

// concat arr.concat(arg1, arg2) - новий масив, куді копіюються дані з інших масивів

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkog", "Singue"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients); // "Mango", "Ajax", "Poly", "Kiwi", "Monkog", "Singue"

// arr.indexOf(item,From) - шукає item починючи з індексу from

// arr.lastIndexOf(item, from) - теж саме, але з лива направо

// arr.includes(item, from) - шукає item починючи з індексу from і повертає true,
// якщо пошук успішний

// Цикл - однотипна дія багато разів

// while (умова){
// код
// тіло циклу
//}

// let i = 0;
// while (i < 3) {
//   alert(i);
//   i++; // додає +1 до i
// } // вспліваючі вікна одін за одним спочатку з 0, потім з 1, потім з 2
// console.log(i); // 3

// do...while - перевірка умови
// do{
// тіло циклу
//} while (умова)

// let i = 0;
// do {
//   alert(i);
//   i++; // важливо вказувати - це +1
// } while (i < 3); // вспліваючі вікна одін за одним спочатку з 0, потім з 1, потім з 2

// For (ініціалізація; умова; вираз після кожної інтерації) {
// код, який буде виконуватись на кожній ітерації
//}

// const max = 10;
// for (let i = 0; i < max; i++) {
//   console.log(i); // 0 1 2 3 4 5 6 7 8 9
// }

// break - преривання операції/циклу

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("5 ітерація!");
//     break;
//   }
// } // 5 ітерація!

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log(i);
//     break;
//   }
// } // 5

// continue - полегшнна версія break. не зупиняє весь цикл,
// зупиняє поточну ітерацію

// наприклад:
// виведемо непарні значення
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   alert(i); // 1, потім 3, 5, 7, 9
// }

// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// } // Block 10

// console.log("Global", a); // Global 5

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while (// до коли цей цикл виконується) {//що має виконуватись}

// while

// let a = 0;

// while (a < 5) {
//   a++; // це теж саме, що і a+1
//   console.log("a", a);
// } // a 1 a 2 a 3 a 4 a 5

// while (a <5) до поки a менще 5

// let a = 3;
// while (a) {
//   console.log("a", a);
//   a--; // це теж саме, що і a-1
// } // a 3 a 2 a 1

//якщо умова одна - можемо записати в один рядочок:

// let a = 3;
// while (a) console.log(a--); // 3 2 1

// do while - це переміщення перевірки - спочатку виконується умова циклу,
//а потім вона перевіряється
// по факту той самий while наізнанку

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 5); // 0 1 2 3 4

//for - цикл. обовязково ставимо ; - у for це важливо for ( ; ; )

// for (let a = 0; a < 3; a++) {
//   console.log(a);
// } // 0 1 2

// теж саме:
// let a = 0;

// for (a; a < 3; a++) {
//   console.log(a);
// } // 0 1 2

// break && continue - припинити, або продовжити цикли

// задачка: ми будемо отримувати від користувача цифри - сумувати їх і сумувати,
//поки людіна не нажме скасувати
// while (true) - це безперервний цикл. Перервати його зможем тільки break

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break; //якщо людіна натискає скасувати - ми отримуємо false
//   summ += value;
// }
// console.log(summ); // сума чиселБ які вводили у вспливаюче вікно

//більш довгий варіант

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break;

//   let i = summ + value;

//   summ += value;
// } // аби не break - користувач так и не зміг би закрити вікно
// console.log("Summ", summ);

// continue - полегшений break - не зупиняє весь цикл,
//зупиняє лише поточну операцію

// задачка - виведемо всі нечотні числа:

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви - структура даних для зберігання та маніпулювання колекцією індексованих значень
// --------------------------//
// --------------------------//

// let arr = [1, 2, 3, 4, 5];

// let arr = ["Apple", "Orange", "Plum"];
// console.log(arr); //всі викликали в консоль
// console.log(arr[2]); // Plum

// // // можемо взаємодіяти з цим масивом. Наприклад замінити щось. Наприклад:

// arr[2] = "Lemon";
// console.log(arr[2]); // Lemon і зминіть Pulm на Lemon тільки тут. Вище - ні

// arr[3] = "Cherry";
// console.log(arr); // виведе весь масив

// // // ми можемо дізнатись його довжину:

// console.log(arr.length); // 4 - скільки елементів в arr

// // в arr можуть бути не лише номера, строки і обєкти:

// arr2 = [1, "hello", { key: "" }];
// console.log(arr2);

// черга - можемо додавати і в початок і в кінець масиву (і додавати також)
//Наприклад:

// let arr = ["Apple", "Orange", "Plum"];
// arr[2] = "Lemon";
// arr[3] = "Cherry";

// console.log(arr); //"Apple", "Orange", "Lemon", "Cherry"

// Методи масиву

// arr.push("Tomat"); // push - додає додатковий arr
// console.log(arr); //"Apple", "Orange", "Lemon", "Cherry", "Tomat"

// arr.pop(); // видаляє останню зміну (тут прибрав 5-й елемент Tomat)
// console.log(arr); //"Apple", "Orange", "Lemon", "Cherry"

// // push і pop працюють з останнім елементом масиву

// // shift і unshift працюють з першим елементом масиву (Apple)

// arr.shift();
// console.log(arr);

// arr.unshift("Tomat");
// console.log(arr);

// вчимось перебирати масив

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// перебір for off (теж саме, що і попереднє)

// for (let item of arr) {
//   console.log(item);
// }

//for of не надає доступ до індексу. Якщо потрібен індекс - є for in

// for (let key in arr) {
//   console.log(arr[key]);

// } // це не є хороший перебір

// масиви можуть зберігати в середині себе теж масиви

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix); // бачимо весь масив

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1]); // бачимо 4 5 6 (тому що все починається з 0)

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]); // бачимо 5 (тому що все починається з 0)

//порівняння масивів - не можна. Тільки перебирати і в переборі порівнювати

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// a = 10;
// console.log(a); // 10
// console.log(b); // a =10 b =5, тому що ми його скопіювали за значенням
//тоді коли обєкти і масиви копіюються за посиланням
// щоб отримувати актульну інформацію

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2); // 1 2 3 4

// примитиви копіюються по while, а складні по посиланню

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// let arr = ["a", "b", "c", "d", "f"]; // нам треба видалити c
// delete arr[2];
// console.log(arr); // a b d f але елементив досі показує 5

// через delete ми видалємо лише значення, а ключ лишається
// тому з масивами так робити не можна

// видалюється масив по іншому
// наприклад є метод splice

// let arr = ["a", "b", "c", "d", "f"];

// arr.splice(2, 1);
// // треба відправити два аргументи: з якого індексу і скільки елементів
// console.log(arr); // a b d f 4 елементи

// let arr = ["a", "b", "c", "d", "f"];
// arr.splice(2, 2);
// console.log(arr); // a b  f 3 елементи

// slice - копіює новий масив з елементами від початкового індексу до заданого
//(в скобках після slice - індекс, з якого почати, і на якому закінчити)
// тобто slice(1,3) - виведе другий і третій елемент
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.slice(1, 3)); // b c // 2 елементи

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a + b); // 1,2,34,5,6 // тобто плюсує не правильно
// так не робиться

// // concat - створює новий масив і до нього передає ті теги, які ми йому передаємо
// let arr = ["a", "b", "c", "d", "f"];
// let a = [1, 2, 3];
// console.log(arr.concat(a)); // a b c d f 1 2 3 // 8 елементів

// let arr = ["a", "b", "c", "d", "f"];
// let a = [1, 2, 3];
// console.log(arr.concat(a, "test")); // a b c d f 1 2 3 test // 9 елементів

// є три методи пошуку:
// indexOf
// lastindexOf
// includes

// indexOf ("аргумент, що шукаємо"
//другий аргумент не обовязковий// з якого індексу шукати)
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.indexOf("c")); // 2

// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.indexOf("c", 3)); // -1 - це означаєб що не знайшов

// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.indexOf("c", 1)); // 2

// lastindexOf - той самий але шукає з іншого боку
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.lastIndexOf("c", 1)); // -1

// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.lastIndexOf("c")); // 2

// includes - видає true або false.
// перевірка наявність цього елементу в цьому масиві
// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.includes("c")); // true

// let arr = ["a", "b", "c", "d", "f"];
// console.log(arr.includes("c", 3)); // false

// find - мінус - знаходе перше співпадіння - вилітає
// шукаємо по масиву

//створюємо масив
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// шукємо по id щось (імя)

// console.log(fruts.find((item) => item.id === 2)); // id 2 cherry
// console.log(fruts.find((item) => item.id === 1)); // id 1 tamat

// filter - пошук для всіх імен - коли буде більше ніж одне співпадіння

// console.log(fruts.filter((item) => item.id < 2)); // apple tomat

// map - створює новий масив, з переданою функцією - використовується для відмальовки
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let result = fruts.map((item) => item.name.length);
// console.log(result); // 5 5 6 6 - довжина слів

// split - розділити масив (на строки)

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");
// console.log(names); // 0: "Оля" 1: "Юля" 2: "Аня" 3: "Петя"
// console.log(arr); // Оля, Юля, Аня, Петя

//join - нам відправляють масив, а нам потрібна строка
// наспаки від split
// let names = "Оля, Юля, Аня, Петя";
// let arr = names.split(", ");
// let newString = arr.join(", ");
// console.log(newString); // Оля, Юля, Аня, Петя

// reduce - обчислити одне значення на основі всього масиву

// наприклад сумму з цього масиву

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// let arr = [1, 2, 3, 4, 5];
// let red = arr.reduce((summ, item) => summ + item);
// // означає складання 1+2=3 3+3=6 6+4=10 10+5=15
// console.log(red); // 15

// визначаємо середнє число
// let arr = [23, 45, 30];
// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ); // 32.666666666 - середнє число
