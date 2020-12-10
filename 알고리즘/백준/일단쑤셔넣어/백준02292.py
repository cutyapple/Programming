n = int(input())
prio = 1
add = 6
room = 1
if n == 1: print(1)
else:
    while True:
        prio += add
        room += 1
        if n <= prio:
            print(room)
            break
        add += 6
