function increaseLRU(arr, arrObj) {
	for (let i = 0; i < arr.length; i++) {
		arrObj[i] += 1;
	}
}

function solution(cacheSize, cities) {
	if (cacheSize === 0) return cities.length * 5;
	var answer = 0;

	let arr = [];
	let arrObj = {};

	for (let i = 0; i < cacheSize; i++) {
		arrObj[i] = 0;
	}

	cities.map((city) => {
		console.log(arrObj, arr, city);
		city = city.toUpperCase();

		let maxIndex = 0;
		for (let i = 1; i < cacheSize; i++) {
			maxIndex = arrObj[maxIndex] > arrObj[i] ? maxIndex : i;
		}

		if (arr.includes(city)) {
			arrObj[arr.findIndex((item) => item === city)] = 0;
			increaseLRU(arr, arrObj);
			answer += 1;
			return;
		}

		if (arr.length < cacheSize) {
			arr.push(city);
			arrObj[arr.length - 1] = 0;
			increaseLRU(arr, arrObj);
			answer += 5;
			return;
		}

		arr[maxIndex] = city;
		arrObj[maxIndex] = 0;
		increaseLRU(arr, arrObj);
		answer += 5;
	});

	return answer;
}

console.log(
	solution(3, [
		'Jeju',
		'Pangyo',
		'Seoul',
		'NewYork',
		'LA',
		'Jeju',
		'Pangyo',
		'Seoul',
		'NewYork',
		'LA',
	]),
);

// console.log(
// 	solution(3, [
// 		'Jeju',
// 		'Pangyo',
// 		'Seoul',
// 		'Jeju',
// 		'Pangyo',
// 		'Seoul',
// 		'Jeju',
// 		'Pangyo',
// 		'Seoul',
// 	]),
// );

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
