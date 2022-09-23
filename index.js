// let names = {
//   name1: "cristiano",
//   name2: "jhanvikapoor",
//   name3: "sagarcasm",
//   name4: "icc",
//   name5: "jinmiran_",
//   img: "https://media.newyorker.com/photos/61e87281b67066a13fd20ea8/1:1/w_1706,h_1706,c_limit/Caesar-Ronaldo.jpg",
// };

// console.log(names.img);

let str = "aabccccba";
let newStr = "";
console.log(str.indexOf("c"));
console.log(str.lastIndexOf("c"));
for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    console.log(newStr);
  }
}

// 1, 1, 2, 3, 4, 9, 8, 27, 16, 81, 32, 243, 64, 729, 128, 2187;
// let num = 2200000;
// let oddPlace = [];
// let evenPlace = [];
// let combinedArr = [];
// for (let i = 0; i < num / 2; i++) {
//   oddPlace[i] = 2 ** i;
//   combinedArr.push(oddPlace[i]);
//   evenPlace[i] = 3 ** i;
//   combinedArr.push(evenPlace[i]);
// }

// if (num % 2 == 0) {
//   console.log(combinedArr);
// } else {
//   console.log(combinedArr);
// }
// console.log(combinedArr[num - 1]);
