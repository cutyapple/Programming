def solution(phone_number):
    return '*'*(len(phone_number)-4) + str(phone_number[-4:])

# phone_number = "01033334444"
phone_number = "027778888"

print(solution(phone_number))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges