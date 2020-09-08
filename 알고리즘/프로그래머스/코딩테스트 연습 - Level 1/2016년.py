def solution(a, b):
    day_list = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED", ]
    month_day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    day = 0

    for i in range(a-1):
        day += month_day[i]
        print(day)

    answer = day_list[(day + b) % 7]
    return answer

a = 5
b = 24

print(solution(1, 1))