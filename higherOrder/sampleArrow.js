// const increament = (function () {
//   console.log("-------------");
//   return function increament(number, value = 1) {
//     return number + value;
//   };
// })();

// console.log(increament(5, 2));
// console.log(increament(5));

// const increament = (num,val=1) => {
//     return num+val;
// }

// const res = (logic) => {
//         return logic;
// }
// console.log(res(increament(12)));



const increament = function () {
  return function (number, value = 1) {
    return number + value;
  };
};

const a= increament()(5,2);
console.log(a);
// console.log(a(5));

