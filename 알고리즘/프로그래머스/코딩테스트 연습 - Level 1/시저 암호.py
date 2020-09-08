def solution(s, n):
    answer = ''

    for text in s:
        print((ord(text) +n) %97)
        if text == ' ':
            answer += ' '
        elif text.islower():
            answer += chr(((ord(text) +n-97) %26+97))
        else:
            answer += chr(((ord(text) +n-65) %26+65))

    return answer

# s = "AB"
# n = 1
# s = "z"
# n = 1
s = "a B z"
n = 4

print(solution(s, n))