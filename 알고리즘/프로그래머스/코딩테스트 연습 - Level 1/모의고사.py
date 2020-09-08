def solution(answers):
    person_1 = [1, 2, 3, 4, 5, ]
    person_2 = [2, 1, 2, 3, 2, 4, 2, 5, ]
    person_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ]
    persons = [person_1, person_2, person_3]
    person_dict = {}
    max = 0
    solution_answer = []

    for idx, person in enumerate(persons):
        answer_count = 0
        for index, answer in enumerate(answers):
            if answer == person[index%person.__len__()]:
                answer_count += 1

        if max == answer_count:
            person_dict[idx] = answer_count
            max = answer_count
        elif max < answer_count:
            person_dict.clear()
            person_dict[idx] = answer_count
            max = answer_count

    sdict = sorted(person_dict.items())
    for item in sdict:
        solution_answer.append(item[0]+1)

    return solution_answer

# answers = [1, 2, 3, 4, 5, ]
answers = [1, 3, 2, 4, 2, ]
solution(answers)

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges