def solution(brown, yellow):
    row = 3

    while(True):
        col = brown/2 + 2 - row

        if (col-2)*(row-2) == yellow:
            return [int(col), row]

        row += 1

brown, yellow = 10, 2
# brown, yellow = 8, 1
# brown, yellow = 24, 24

print(solution(brown, yellow))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
