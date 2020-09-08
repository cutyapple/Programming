def solution(bridge_length, weight, truck_weights):
    answer = 0
    n = 0
    residual_weight = weight
    wait_truck_stack = []
    ing_truck_stack = []
    end_truck_stack = []

    for index, wait_truck in enumerate(wait_truck_stack):
        n = 0
        while(residual_weight > wait_truck_stack[index+n]):
            residual_weight = weight - wait_truck_stack[index+n]
            n += 1
            bridge_length

    return answer

bridge_length, weight, truck_weights = 2, 10, [7,4,5,6]
# bridge_length, weight, truck_weights = 100, 100, [10,10,10,10,10,10,10,10,10,10]

print(solution(bridge_length, weight, truck_weights))