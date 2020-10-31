def solution(priorities, location):
    answer = 0

    text = ''.join(map(str, priorities))

    while True:
        for index, item in enumerate(text):
            if int(text[0]) < int(item):
                text = text[1:] + text[0]
                if location == 0:
                    location = len(text) - 1
                else:
                    location -= 1
                break
            elif index == len(text) - 1:
                answer += 1
                if location == 0:
                    return answer
                if location == 0:
                    location = len(text) - 1
                else:
                    location -= 1
                text = text[1:]



# priorities, location = [1, 1, 9, 1, 1, 1], 0
priorities, location = [2, 1, 3, 2], 2

print(solution(priorities, location))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
