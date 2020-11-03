function solution(s) {
	let left = 0,
		right = 0;

	for (b of s.split('')) {
		b === '(' ? left++ : right++;
		if (right > left) return false;
	}

	return right === left ? true : false;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
