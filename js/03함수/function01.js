
sayHello(); // 함수의 선언은 밑에서 됐지만, 선언적함수는 호이스팅(당겨오기)가 가능함.

// 함수의 선언
function sayHello() {
    console.log("안녕하세요!!");
}

// 구구단을 출력하는 함수
function gugudan(){
    console.log("===== 2단 =====");
    for(let i = 1; i <= 9; i++)
        console.log(`2 x ${i} = ${2*i}`);
}

// 함수를 부르는 과정 - 호출
sayHello();
gugudan();