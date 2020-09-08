a, b = map(int, input().strip().split(' '))
for _ in range(b):
    for __ in range(a):
        print("*", end='')
    print()