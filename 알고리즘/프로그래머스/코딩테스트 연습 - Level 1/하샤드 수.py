def solution(x):
    return True if x%sum(map(int, list(str(x)))) == 0 else False

# x = 13
x = 10

print(solution(x))