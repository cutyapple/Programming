def solution(progresses, speeds):
    answer = []
    answer_list = []

    for index in range(len(progresses)):
        day = 0
        while(progresses[index] < 100):
            progresses[index] += speeds[index]
            day += 1
        if index > 0 and answer_list[index-1] > day:
            answer_list.append(answer_list[index-1])
        else:
            answer_list.append(day)

    for index, answers in enumerate(answer_list):
        if index > 0 and answers == answer_list[index-1]:
            continue

        answer.append(answer_list.count(answers))

    return answer


progresses, speeds = [93,30,55], [1,30,5]

print(solution(progresses, speeds))