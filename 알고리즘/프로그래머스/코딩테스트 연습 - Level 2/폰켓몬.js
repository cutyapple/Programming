function solution(nums) {
	let arr = [];

	nums.map((num) => (arr[num] = 1));
	arr = arr.filter((data) => data === 1);

	return arr.length > nums.length / 2 ? nums.length / 2 : arr.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
