def solution(skill, skill_trees):
    answer = len(skill_trees)

    skill_list = []
    for skills in skill_trees:
        temp_list = []

        for sk_name in skills:
            if sk_name in list(skill):
                temp_list.append(sk_name)

        skill_list.append(temp_list)

    for skills in skill_list:
        for index in range(len(skills)):
            if list(skill)[index] != skills[index]:
                answer -= 1
                break

    return answer

skill, skill_trees = "CBD", ["BACDE", "CBADF", "AECB", "BDA"]

print(solution(skill, skill_trees))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges