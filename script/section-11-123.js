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
} else if ((Number(age) > 18) && (Number(age) < 70)) {
    alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
 } else if (Number(age) > 70) {
        alert("Sorry, you are too old to drive this car. Powering off");
    }

