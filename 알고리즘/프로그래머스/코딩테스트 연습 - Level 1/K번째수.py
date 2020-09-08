def solution(array, commands):
    answer = []

    for command in commands:
        i, j, k = command[0], command[1], command[2]
        new_array = array[i-1:j]
        new_array = sorted(new_array)
        answer.append(new_array[k-1])

    return answer


array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

solution(array, commands)

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges