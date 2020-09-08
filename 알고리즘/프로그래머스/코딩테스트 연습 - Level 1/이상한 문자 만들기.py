def solution(s):
    answer = ''

    strings = s.split(' ')

    for idx, string in enumerate(strings):
        temp_string = ''
        for index, _ in enumerate(string):
            if index % 2 == 0:
                temp_string += string[index].upper()
            else:
                temp_string += string[index].lower()
        if idx+1 != strings.__len__():
            answer += temp_string+' '
        else:
            answer += temp_string

    return answer


s = "try hello world"

print(solution(s))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges