def solution(s):
    result = ''

    for text in sorted(list(s))[::-1]:
        result += text
    return result

s = "ZbcCdefgAB"

print(solution(s))


# def solution(s):
#     return ''.join(sorted(s, reverse=True))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges