def solution(num):
    answer = -1
    count = 0

    while(count < 500):
        if num == 1:
            return count
        count += 1
        if num%2==0:
            num/=2
        else:
            num=num*3+1

    return answer

# num = 6
num = 626331

print(solution(num))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges