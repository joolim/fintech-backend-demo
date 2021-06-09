// var x = 100;
// console.log("hello backend");
// console.log(`the value of x is ${x}`);

// var age = 30;

// if (age > 40) {
//     console.log('yes, You can vaccinate now');
// }
// else {
//         console.log('you have to wait for sms notification');
//     }
// normal scripts
// function add(x, y){
//     var z = x + y;
//     return z;
//     }
// // anonymous function
// var anon_add = function (x, y){
//     var z = x + y;
//     return z;
// }
// arrow functions
// var arrow_add = (x, y) => {
//     var z = x + y;
//     return z;
// }
// var a = 1110;
// var b = 120;
// var sum = arrow_add(a,b);
// // var sum = anon_add(a,b);
// console.log(sum);

// // anonymous arrow function
// var arrow_add = (x, y) => {
//     var z = x + y;
//     return z;
// }
// var a = 1110;
// var b = 120;
// var sum = arrow_add(a,b);
// // var sum = anon_add(a,b);
// console.log(sum);

// below are dixant examples so far
// // normal function
// function add(x, y) {
//   var z = x + y;
//   return z;
// }

// // anonymous function
// var anon_add = function (x, y) {
//   var z = x + y;
//   return z;
// };

// // arrow functions
// var arrow_add = (x, y) => {
//   var z = x + y;
//   return z;
// };

// var a = 10;
// var b = 20;

// // var sum = add(a, b);
// var sum = anon_add(a, b);

// console.log(sum);

// demo of function in function use
function conduct_exam(subject, print_questions) {
    console.log("Please start your exam");
    print_questions(subject);
    console.log("Please stop writing");
  }
  
conduct_exam("Maths", function (subject) {
    if (subject == "Maths") {
      console.log("What is the answer for 52 x 72?");
    } else {
      console.log("How many bones in the human body?");
    }
  });
//   



