function solution(record) {
	let answer = [];
	let arr = [];

	const dataObj = {};

	record.map((text) =>
		text.split(' ')[0] === 'Enter'
			? ((dataObj[text.split(' ')[1]] = text.split(' ')[2]),
			  arr.push(`${text.split(' ')[1]}|님이 들어왔습니다.`))
			: text.split(' ')[0] === 'Leave'
			? arr.push(`${text.split(' ')[1]}|님이 나갔습니다.`)
			: (dataObj[text.split(' ')[1]] = text.split(' ')[2]),
	);

	arr.map((text) =>
		answer.push(`${dataObj[text.split('|')[0]]}${text.split('|')[1]}`),
	);

	return answer;
}

console.log(
	solution([
		'Enter uid1234 Muzi',
		'Enter uid4567 Prodo',
		'Leave uid1234',
		'Enter uid1234 Prodo',
		'Change uid4567 Ryan',
	]),
);

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
