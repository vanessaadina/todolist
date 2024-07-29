//Check the login

//My Answer
// let login = prompt("Who's there?", "");

// login == "Admin" ? password = prompt("Password?", "") :
//     login == "" || login == null ? alert("Cancelled") : alert("I don't know you")
// password == "" || password == null ? alert("Cancelled") : alert("Wrong password")
// password == "TheMaster" ? alert("Welcome") : ''

//Their Answer
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//     let pass = prompt('Password?', '');

//     if (pass === 'TheMaster') {
//         alert('Welcome!');
//     } else if (pass === '' || pass === null) {
//         alert('Canceled');
//     } else {
//         alert('Wrong password');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Canceled');
// } else {
//     alert("I don't know you");
// }


//It only matters for the while loop (If a for loop is used, the results will be the same)
//Prefix form ++i
//++i returns new value each time so it stops at 5 < 5 (Goes from 1 to 4)
//let i = 0;
//while (++i < 5) alert( i );

//Postfix form i++
//++i returns old value each time so it stops at 5 < 5 (But it goes from 1 to 5 because when i=5 it still returns i=4)
//let i = 0;
//while (i++ < 5) alert( i );


//Gosh this took way too long
// let num = 0;
// while (true){
//     let userInput = prompt("Enter a number", "");
//     if(!userInput || userInput>100) break;
// }