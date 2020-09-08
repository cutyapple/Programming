def solution(a, b):
    answer = 0
    big = b
    small = a
    if a > b:
        small = b
        big = a

    for n in range(small, big+1):
        answer+=n
    return answer

a = 3
b = 5

print(solution(a, b))


# def adder(a, b):
#     if a > b: a, b = b, a
#
#     return sum(range(a,b+1))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges