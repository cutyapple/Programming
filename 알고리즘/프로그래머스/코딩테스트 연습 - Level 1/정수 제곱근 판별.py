def solution(n):
    check_num = n ** 0.5
    if check_num == int(check_num):
        return int((check_num+1) ** 2)

    return -1

# n = 121
n = 3

print(solution(n))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges