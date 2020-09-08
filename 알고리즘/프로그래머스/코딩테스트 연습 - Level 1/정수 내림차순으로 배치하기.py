def solution(n):
    # n_list = list(sorted(list(map(int, str(n)))))
    # n_list.sort(reverse=True)
    # print(int("".join(list(sorted(list(map(str, str(n)))))[::-1])))

    return int("".join(list(sorted(list(map(str, str(n)))))[::-1]))

n = 118372

print(solution(n))

# 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges