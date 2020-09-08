import math

def solution(n):
    answer = 0
    if n == 1:
        return 1

    for i in range(1, math.ceil(n/2)+1):
        if n%i == 0:
            answer += i

    return answer + n

n = 1
# n = 5

print(solution(n))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges