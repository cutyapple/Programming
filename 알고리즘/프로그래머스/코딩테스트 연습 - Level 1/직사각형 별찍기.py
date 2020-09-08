a, b = map(int, input().strip().split(' '))
for _ in range(b):
    for __ in range(a):
        print("*", end='')
    print()

    # 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges