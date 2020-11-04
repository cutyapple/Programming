function solution(s) {
	return `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
