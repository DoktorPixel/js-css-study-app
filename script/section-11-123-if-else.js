// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// var age = prompt("What is your age?");
// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if ((Number(age) > 18) || (Number(age) < 70)) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (Number(age) > 70) {
//     alert("Sorry, you are too old to drive this car. Powering off");
// }

var age = prompt("What is your age?");
if (Number(age) < 18) {
  alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18 && Number(age) < 70) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 70) {
  alert("Sorry, you are too old to drive this car. Powering off");
}

let company = prompt("Какое официальное» название JavaScript?", "");
if (company == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Неправильно.");
}

let userNamber = prompt("enter namber");
if (Number(userNamber) > 0) {
  alert(1);
} else if (Number(userNamber) < 0) {
  alert(-1);
} else if (Number(userNamber) == 0) {
  alert(0);
}

//  SAME AS ABOVE:

let value = prompt('Введите число', 0);
if (value > 0) {
    alert( 1 );
    } else if (value < 0) {
    alert( -1 );
    } else {
    alert( 0 );
    } 


let result;
if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}
//SAME AS ABOVE:
result = a + b < 4 ? "Мало" : "Много";

let message;
if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

//SAME AS ABOVE:
let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

//

let x = 1;
x > 0 && alert("Greater than zero!");

//SAME AS ABOVE:
let x = 1;
if (x > 0) {
  alert("Greater than zero!");
}

//

alert(!true); // false
alert(!0); // true

alert(!!"non-empty string"); // true
alert(!!null); // false
//SAME AS ABOVE:
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

//

if (age >= 14 && age <= 90);
//
if (!(age >= 14 && age <= 90));
//SAME AS ABOVE:
if (age < 14 && age > 90);

//

let userName = prompt("who are you?", "");
if (userName == "admin") {
  let password = prompt("enter your password", "");
  if (password == "boss") {
    alert("Hi boss");
  } else if (password == "" || password == null) {
    alert("cancellation");
  } else {
    ("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("cancellation");
} else {
  alert("i dont know you");
}
