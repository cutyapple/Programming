def solution(arr):
    answer = []

    for num in arr:
        if answer[-1:] == [num]: continue
        answer.append(num)

    return answer


arr = [1,1,3,3,0,1,1]

print(solution(arr))