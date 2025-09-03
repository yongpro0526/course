var a = 5;
var b = 3;

console.log(a == b);
console.log(a !== b);
console.log(a >= 5)
console.log(a < 10)
console.log(a <= 3)
console.log(a > 5)

// js에만 있는 연산자 ===, !===
let x = "5";
let y = 5;

console.log("==", x == y); // 값만 비교
console.log("===", x === y); // 값과 타입을 비교 - 3개짜리 연산자를 사용하는 편이 좋음.
console.log("!=", x != y);
console.log("!==", x !== y);

let c;
let d = null;
console.log(c == d);
console.log(c === d);

