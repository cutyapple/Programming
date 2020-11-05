function solution(n) {
	let count = 1;
	while (n !== 1) {
		if (Math.ceil(n / 2) === n / 2) {
			n /= 2;
		} else {
			count++;
			n -= 1;
		}
	}

	return count;
}

console.log(solution(5000));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
