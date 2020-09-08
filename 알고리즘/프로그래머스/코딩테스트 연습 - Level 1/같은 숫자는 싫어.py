def solution(arr):
    answer = []

    for num in arr:
        if answer[-1:] == [num]: continue
        answer.append(num)

    return answer


arr = [1,1,3,3,0,1,1]

print(solution(arr))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges