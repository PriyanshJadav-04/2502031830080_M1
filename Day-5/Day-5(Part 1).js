// --------------- 1. Print number 1 to 10 ---------------
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   i++;
//   console.log(i)
// } while (i < 10);

// --------------- 2. Display Student Name ---------------
// let names = "Priyansh Jadav";
// for (let i = 0 ; i < 1; i++) {
//     console.log(names);
// }

// let i = 0;
// while (i < 1) {
//   console.log(names);
//   i++;
// }

// do {
//   console.log(names);
//   i++;
// } while (i < 1);

// --------------- 3. Calculate Total Marks ---------------
// let marks = [10, 20, 30];
// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }
// console.log(total);

// let i = 0;
// while (i < marks.length) {
//   total += marks[i];
//   i++;
// }
// console.log(total);

// do {
//   total += marks[i];
//   i++;
// } while (i < marks.length);
// console.log(total);

// --------------- 4. Mulitplication Table ---------------
// let number = 5;
// for (let i = 1; i < 11; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// let i = 1;
// while (i < 11) {
//   console.log(`${number} x ${i} = ${number * i}`);
//   i++;
// }

// do {
//   console.log(`${number} x ${i} = ${number * i}`);
//   i++;
// } while (i < 11);

// --------------- 5. Even Number ---------------
// for(let i = 0; i < 10; i++){
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 10);

// --------------- 6. Odd Number ---------------
// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 10) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// do {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i < 10);

// --------------- 7. Countdown Timer ---------------
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("Times Up!");

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }
// console.log("Times Up!");

// let i = 10;
// do {
//   i--;
//   console.log(i)
// } while (i >= 1);
// console.log("Times Up!");

// --------------- 8. Nested Loop ---------------
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// --------------- 9. ATM PIN Check ---------------
// let pass = 1234;
// let auth = false;
// for (let i = 1; i <= 3; i++) {
//   let password = Number(prompt(`Your Attemp is ${i} Enter you ATM PIN : `));
//   if (password === pass) {
//     alert("PIN verified. Access granted.");
//     auth = true;
//     break;
//   } else {
//     alert(`Incorrect PIN. Tries left: ${3 - i}`);
//   }
// }
// if (!auth) {
//   alert("Maximum attempts reached. Card blocked.");
// }

// --------------- 10. Check Pass and Fail ---------------
// let marks = [35, 50, 80, 20, 90];

// for (let i = 0; i < marks.length; i++) {
//   if (marks[i] >= 33) {
//     console.log(marks[i], "Pass");
//   } else {
//     console.log(marks[i], "Fail");
//   }
// }