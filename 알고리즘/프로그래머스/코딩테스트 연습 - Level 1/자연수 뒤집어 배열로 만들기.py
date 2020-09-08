def solution(n):
    # return list(map(int, reversed(str(n))))
    return list(reversed([int(i) for i in str(n)]))

n = 12345

print(solution(n))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges