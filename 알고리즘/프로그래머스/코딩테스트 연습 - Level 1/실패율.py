def solution(N, stages):
    stage = {}
    for i in stages:
        stage[i] = stage.get(i, 0) + 1

    failure = [0] * N
    num = len(stages)
    for i in range(1, N + 1):
        if stage.get(i, 0) != 0:
            failure[i - 1] = stage[i] / num
            num -= stage[i]

    answer = []
    num = len(failure)
    for i, item in enumerate(failure):
        m = item
        idx = i
        for j, _item in enumerate(failure[::-1]):
            if _item >= m:
                m = _item
                idx = num - 1 - j
        answer.append(idx + 1)
        failure[idx] = -1

    return answer

N, stages = 5, [2, 1, 2, 6, 2, 4, 3, 3]
# N, stages = 4, [4, 4, 4, 4, 4]

print(solution(N, stages))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges