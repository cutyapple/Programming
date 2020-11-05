function solution(clothes) {
	var answer = 1;
	var obj = {};
	for (var i = 0; i < clothes.length; i++) {
		obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
	}

	for (var key in obj) {
		answer *= obj[key];
	}

	return answer - 1;
}

console.log(
	solution([
		['yellow_hat', 'headgear'],
		['blue_sunglasses', 'eyewear'],
		['green_turban', 'headgear'],
	]),
);

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
