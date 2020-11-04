function solution(n) {
	const arr = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		if (!arr[i]) arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
	}
	return arr[n];
}
console.log(solution(100000));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
