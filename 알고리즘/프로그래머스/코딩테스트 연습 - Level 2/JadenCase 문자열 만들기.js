function solution(s) {
	const answer = s
		.split(' ')
		.reduce(
			(pre, text) =>
				pre +
				text.slice(0, 1).toUpperCase() +
				text.slice(1, text.length).toLowerCase() +
				' ',
			'',
		);

	return answer.slice(0, answer.length - 1);
}

console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
