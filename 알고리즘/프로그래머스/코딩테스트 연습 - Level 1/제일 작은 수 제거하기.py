def solution(arr):
    if arr.__len__() == 1: return -1
    arr.remove(min(arr))
    return arr

arr = [4, 3, 2, 1]

print(solution(arr))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges