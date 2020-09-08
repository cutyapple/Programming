def solution(s):
    is_odd = 0
    if len(s) % 2 == 0:
        is_odd = 1

    answer = s[int(len(s)/2)-is_odd:int(len(s)/2)+1]

    return answer

# s = "abcde"
s = "qwer"

solution(s)

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges