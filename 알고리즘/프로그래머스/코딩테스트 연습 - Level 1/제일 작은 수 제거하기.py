def solution(arr):
    if arr.__len__() == 1: return -1
    arr.remove(min(arr))
    return arr

arr = [4, 3, 2, 1]

print(solution(arr))