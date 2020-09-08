def solution(s):
    is_odd = 0
    if len(s) % 2 == 0:
        is_odd = 1

    answer = s[int(len(s)/2)-is_odd:int(len(s)/2)+1]

    return answer

# s = "abcde"
s = "qwer"

solution(s)