def solution(dartResult):
    answer = 0

    result_list = []

    for index, result_char in enumerate(list(dartResult)):
        if result_char.isdigit():
            if index != 0 and result_list[len(result_list)-1] == 1:
                result_list.pop()
                result_list.append(10)
            else:
                result_list.append(int(result_char))
        else:
            result_list.append(result_char)

    prev_temp = 0
    temp = 0
    for result_char in result_list:
        if result_char == '#':
            temp *= -1
        elif result_char == '*':
            prev_temp *= 2
            temp *= 2
        elif result_char == 'S':
            temp = temp
        elif result_char == 'D':
            temp **= 2
        elif result_char == 'T':
            temp **= 3
        else:
            answer += prev_temp
            prev_temp = temp
            temp = result_char
    answer += prev_temp
    answer += temp

    return answer

# dartResult = "1S2D*3T"
# dartResult = "1D2S#10S"
# dartResult = "1D2S0T"
# dartResult = "1D#2S*3S"
dartResult = "10S10S0S*"

print(solution(dartResult))