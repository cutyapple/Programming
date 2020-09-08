def solution(seoul):
    answer = ''

    for index, string in enumerate(seoul):
        if string == "Kim":
            return "김서방은 "+str(index)+"에 있다"

seoul = ["Jane", "Kim"]

print(solution(seoul))