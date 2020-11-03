function solution(msg) {
	var answer = [];
	const initList = [
		'-',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	`${msg} `.split('').reduce((pre, cur) => {
		console.log(pre);

		if (initList.includes(pre)) {
			console.log(initList.findIndex((el) => el === pre));
			answer.push(initList.findIndex((el) => el === pre));

			if (!initList.includes(pre + cur)) {
				console.log(pre + cur);
				initList.push(pre + cur);
			}

			return cur;
		}

		initList.push(pre);

		return pre + cur;
	});

	console.log(initList);
	return answer;
}

console.log(solution('KAKAO'));
// console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
// console.log(solution('ABABABABABABABAB'));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
