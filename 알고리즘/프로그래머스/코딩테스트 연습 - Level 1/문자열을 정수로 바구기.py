def solution(s):
    if s[0] == '-':
        return -1 * int(s[1:])

    return int(s)

# s = "1234"
s = "-1234"

print(solution(s))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges