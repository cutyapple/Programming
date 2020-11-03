function solution(numbers) {
	var answer = [];

	numbers.map((numI, idxI) =>
		numbers.map((numJ, idxJ) => {
			if (idxI !== idxJ) answer.push(numI + numJ);
		}),
	);

	return [...new Set(answer)].sort((a, b) => (a > b ? 1 : -1));
}

// console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
