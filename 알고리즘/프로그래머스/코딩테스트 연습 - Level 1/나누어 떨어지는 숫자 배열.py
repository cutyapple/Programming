def solution(arr, divisor):
    answer = []

    for item in arr:
        if item%divisor==0:
            answer.append(item)

    if len(answer) == 0:
        return [-1]
    else:
        return sorted(answer)


# arr = [5, 9, 7, 10]
# divisor = 5
# arr = [3,2,6]
# divisor = 10
arr = [2, 36, 1, 3]
divisor = 1

print(solution(arr, divisor))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges