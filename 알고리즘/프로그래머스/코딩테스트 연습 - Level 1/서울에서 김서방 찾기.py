def solution(seoul):
    answer = ''

    for index, string in enumerate(seoul):
        if string == "Kim":
            return "김서방은 "+str(index)+"에 있다"

seoul = ["Jane", "Kim"]

print(solution(seoul))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges