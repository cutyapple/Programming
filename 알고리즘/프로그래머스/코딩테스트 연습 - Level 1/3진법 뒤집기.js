function solution(n) {
	var answer = 0;
	let str = '';
	let perioty = 1;

	while (n >= 1) {
		str += n % 3;
		n = Math.floor(n / 3);
	}

	str = str.replace(/(^0+)/, '');

	while (str != 0) {
		answer += str[str.length - 1] * perioty;
		perioty *= 3;
		str = String(Math.floor(Number(str / 10)));
	}

	return answer;
}

console.log(solution(760));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
