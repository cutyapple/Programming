def solution(n, m):
    answer = []

    if n > m: n, m = m, n

    for i in range(m, 0, -1):
        if m%i==0 and n%i==0:
            answer.append(i)
            break
    for i in range(m, m*n+1):
        if i%n == 0 and i%m == 0:
            answer.append(i)
            break

    return answer

# n, m = 3, 12
n, m = 2, 5

print(solution(n, m))