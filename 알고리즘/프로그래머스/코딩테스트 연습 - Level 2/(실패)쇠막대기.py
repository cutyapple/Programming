def solution(arrangement):
    answer = 0

    stack = []

    for char in arrangement:
        if len(stack) > 0 and stack[len(stack)] != char:
            stack.pop()
        stack.append(char)


    return answer

arrangement = "() ( ( ( () () ) ( () ) () ) ) ( () )"

print(solution(arrangement))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges