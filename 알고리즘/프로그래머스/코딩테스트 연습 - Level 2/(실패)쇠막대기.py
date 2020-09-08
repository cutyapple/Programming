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