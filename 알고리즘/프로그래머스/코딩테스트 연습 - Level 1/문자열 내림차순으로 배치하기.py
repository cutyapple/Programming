def solution(s):
    result = ''

    for text in sorted(list(s))[::-1]:
        result += text
    return result

s = "ZbcCdefgAB"

print(solution(s))


# def solution(s):
#     return ''.join(sorted(s, reverse=True))