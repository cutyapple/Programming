fixed_value, flow_value, price = map(int, input().split(' '))
if flow_value >= price: print(-1)
else:
    print(fixed_value // (price - flow_value) + 1)