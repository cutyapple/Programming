def solution(n):
    sieve = [True] * (n+1)
    count = 0
    m = int(n ** 0.5)
    for i in range(2, m + 1):
        if sieve[i] == True:
            for j in range(i + i, n+1, i):
                sieve[j] = False

    for i in range(2, n+1):
        if sieve[i] == True:
            count += 1

    return count

print(solution(1000))