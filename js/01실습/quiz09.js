// 1. 구구단 5단을 출력
// 2. 7 ~ 100의 정수 중에서 7의 배수를 출력
// 3. 1 ~ 50의 홀수의 합.
// 4. 100의 약수의 합.


for(let a = 1; a <= 9; a++) {
    let b = 5 * a;
    console.log(`5 x ${a} = ${b}`);
}

for(let c = 7; c <= 100; c++) {
    if(c % 7 === 0) {
        console.log(c);
    }
}

let e = 0;
for(let d = 1; d <= 50; d++) {
    if(d % 2 !== 0) {
        e += d
    }
}
console.log(`1 ~ 50의 홀수의 합은 ${e}이다.`);

let g = 0;
for(let f = 1; f <= 100; f++) {
    if(100 % f === 0) {
        g += f;
    }
}
console.log(`100의 약수의 합은 ${g}이다.`);