def solution(n):
    add=''

    if n%2==1:
        add='수'

    return '수박'*int(n/2)+add


# n = 3
n = 4

print(solution(n))