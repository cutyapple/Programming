def solution(strings, n):
    answer = []

    for index, string in enumerate(strings):
        strings[index] = string[n]+string

    strings.sort()

    for i in range(len(strings)):
        answer.append(strings[i][1:])

    return answer


strings = ["sun", "bed", "car"]
n = 1
# strings = ["abce", "abcd", "cdx"]
# n = 2

print(solution(strings, n))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges