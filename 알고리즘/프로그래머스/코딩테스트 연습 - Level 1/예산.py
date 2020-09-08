def solution(d, budget):
    answer = len(d)
    result = 0
    count = 0
    d.sort()
    print(d)
    if d[0] > budget:
        return 0
    for index, num in enumerate(d):
        result += num
        count += 1
        if index+1 != len(d) and result + d[index+1] > budget :
            return count

    return answer

# d = [1, 3, 2, 5, 4]
# budget = 9
d = [2, 2, 3, 3]
budget = 1

print(solution(d, budget))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges