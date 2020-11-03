function solution(land) {
	var answer = 0;
	let tmpArr = [[], []];

	for (let i = land.length - 1; i >= 0; i--) {
		let max = land[i].reduce((pre, cur) => (pre > cur ? pre : cur), 0);
		for (let j = 0; j < 4; j++) {
			tmpArr[0][j] = land[i][j];
			// tmpArr[0][j] = max > land[i][j] ? -1 : land[i][j];
		}
		console.log(tmpArr);
	}

	return answer;
}

console.log(
	solution([
		[1, 2, 3, 5],
		[5, 6, 7, 8],
		[4, 3, 2, 1],
	]),
);

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
