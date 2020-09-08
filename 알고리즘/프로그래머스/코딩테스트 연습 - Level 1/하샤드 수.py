def solution(x):
    return True if x%sum(map(int, list(str(x)))) == 0 else False

# x = 13
x = 10

print(solution(x))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges