// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

function solution(array, height) {
    array.push(height);
    return array;
}

console.log(array);
console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0

// 1. array에 height를 포함한 배열을 만든다.
// 2. array를 큰 수 부터 정렬한다.
// 3. height의 인덱스 번호를 찾는다.