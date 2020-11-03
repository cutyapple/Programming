function getNowPeriodNum(num, period, text) {
	let str = '';

	if (num <= 1) return num;

	while (num >= 1) {
		num % period === 1
			? (str += text[num % period])
			: (str += text[num % period]);
		num = Math.floor(num / period);
	}

	if (!text[num % period] != 0) {
		str += text[num % period];
	}

	return str.split('').reverse().join('');
}

function solution(n, t, m, p) {
	const CONSTANT_TEXT = '0123456789ABCDEF';
	const text = CONSTANT_TEXT.slice(0, n);
	let answer = '';
	let arr = '';

	for (let i = 0; i <= t * m; i++) {
		arr += getNowPeriodNum(i, n, text);
	}

	for (let i = p - 1; i < t * m; i += m) {
		answer += arr[i];
	}

	return answer;
}

// console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
// console.log(solution(16, 16, 2, 2));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
