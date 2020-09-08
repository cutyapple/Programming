def solution(numbers, hand):
    answer = ''
    num_index_list = []
    key_pad = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#']
    ]

    is_right_hand = hand == 'right'

    left_hand_index = [3, 0]
    right_hand_index = [3, 2]

    for num in numbers:
        for i in range(4):
            for j in range(3):
                if str(num) == key_pad[i][j]:
                    num_index_list.append([i, j])
    print(num_index_list)
    index = 0

    for num_index_i, num_index_j in num_index_list:
        print(num_index_list[index], left_hand_index, right_hand_index, num_index_i, num_index_j, end=' ')

        if num_index_j == 0:
            left_hand_index = [num_index_i, num_index_j]
            answer += 'L'
        elif num_index_j == 2:
            right_hand_index = [num_index_i, num_index_j]
            answer += 'R'
        else:
            left_index_interval = abs(left_hand_index[0] - num_index_i) + abs(left_hand_index[1] - num_index_j)
            right_index_interval = abs(right_hand_index[0] - num_index_i) + abs(right_hand_index[1] - num_index_j)

            print(left_index_interval, right_index_interval, end=' ')

            if right_index_interval == left_index_interval:
                if is_right_hand:
                    right_hand_index = [num_index_i, num_index_j]
                    answer += 'R'
                else:
                    left_hand_index = [num_index_i, num_index_j]
                    answer += 'L'
            elif left_index_interval < right_index_interval:
                left_hand_index = [num_index_i, num_index_j]
                answer += 'L'
            else:
                right_hand_index = [num_index_i, num_index_j]
                answer += 'R'
        print(answer)
        index += 1

    return answer


# numbers, hand = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"
numbers, hand = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"

print(solution(numbers, hand))