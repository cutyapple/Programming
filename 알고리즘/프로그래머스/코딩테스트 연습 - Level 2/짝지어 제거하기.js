function solution(s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
		else stack.pop();
	}
	return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
