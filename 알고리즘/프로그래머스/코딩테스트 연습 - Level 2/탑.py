def solution(heights):
    answer = []
    index = len(heights)
    for i in range(index-1, -1, -1):
        for idx, j in enumerate(range(index-2, -1, -1)):
            if heights[i] < heights[j]:
                answer.append(j+1)
                break
            if j == 0:
                answer.append(0)
        index-=1

    answer.append(0)
    answer.reverse()
    return answer

heights = [6,9,5,7,4]
# heights = [3,9,9,3,5,7,2]
# heights = [1,5,3,6,7,6,5]

print(solution(heights))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges