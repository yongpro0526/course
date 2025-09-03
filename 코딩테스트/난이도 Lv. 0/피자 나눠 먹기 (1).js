// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
    var answer = parseInt(n / 7) + 1;
    if(n % 7 === 0) {
        return answer - 1
    }
    return answer
}

console.log(solution(7)); // 1
console.log(solution(1)); // 1
console.log(solution(15)); // 3

// n값이 7이하면 1, 14이하, 8이상이면, 2
// 만약, n이 7의 배수라면, -1

