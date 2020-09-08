def solution(n):
    # return list(map(int, reversed(str(n))))
    return list(reversed([int(i) for i in str(n)]))

n = 12345

print(solution(n))