def solution(n, lost, reserve):
    answer = n

    std = []

    for i in range(n):
        std.append(1)
    for i in lost:
        std[i-1] -= 1
    for i in reserve:
        std[i-1] += 1

    for index, cloth in enumerate(std):
        if index != 0 and index != std.__len__() and std[index-1] == 0 and cloth > 1:
            std[index-1] += 1
            std[index] -= 1

    std.reverse()

    for index, cloth in enumerate(std):
        if index != 0 and index != std.__len__() and std[index-1] == 0 and cloth > 1:
            std[index-1] += 1
            std[index] -= 1

    for i in std:
        if i == 0:
            answer -= 1

    print(std)

    return answer

n = 5
lost = [2, 4, ]
reserve = [3, ]

print(solution(n, lost, reserve))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges