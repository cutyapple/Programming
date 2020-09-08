def solution(x, n):
    answer = []
    if x == 0:
        for _ in range(n):
            answer.append(0)
        return answer
    for num in range(x, x*n, x):
        answer.append(num)
    answer.append(x * n)
    return answer


# x, n = 2, 5
x, n = 0, 2

print(solution(x, n))