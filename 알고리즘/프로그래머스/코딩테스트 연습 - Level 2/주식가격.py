def solution(prices):
    answer = []

    for i in range(len(prices)):
        tmp, can = 0, True
        for j in range(i, len(prices)):
            if prices[i] > prices[j]:
                answer.append(tmp)
                can = False
                break
            tmp += 1
        if can:
            answer.append(tmp-1)

    return answer


prices = [1, 2, 3, 2, 3, 4, 2, 3, 3, 3]

print(solution(prices))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
