console.log("while and for loops");
let i = 0;
while (i < 3) {
  alert(i);
  i++;
} // outputs: 0 then 1 then 2

//
let i = 3;
while (i) { 
alert( i );
i--;
}
//SAME AS ABOVE:
let i = 3;
while (i) alert(i--);


// 
for (let i = 0; i < 3; i++) { // outputs: 0 then 1 then 2
  alert(i);
  }
//SAME AS ABOVE:
for (let i = 0; i < 3; i++) alert(i)
// Выполнить начало
let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3

// 
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
  }
  alert(i); // ошибка, нет такой переменной
// 
  let i = 0;
for (i = 0; i < 3; i++) { // используем существующую переменную
alert(i); // 0, 1, 2
}
alert(i); // 3, переменная доступна, т.к. была объявлена снаружи цикла

// 
let i = 0; // мы уже имеем объявленную i с присвоенным значением
for (; i < 3; i++) { // нет необходимости в "начале"
alert( i ); // 0, 1, 2
}
let i = 0;
for (; i < 3;) {
alert( i++ );
}
// 

let sum = 0;
while (true) {
let value = +prompt("Введите число", '');
if (!value) break; // (*)
sum += value;
}
alert( 'Сумма: ' + sum );

// 

for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  alert(i); // 1, затем 3, 5, 7, 9
  }

82