def solution(n, arr1, arr2):
    answer = []

    arr1_two_arr_list = []
    arr2_two_arr_list = []

    for item in arr1:
        two_arr = ''
        while item != 0:
            two_arr += str(int(item % 2))
            item = (item - item%2) / 2
        while len(two_arr) < n:
            two_arr += "0"
        arr1_two_arr_list.append(two_arr[::1])

    for item in arr2:
        two_arr = ''
        while item != 0:
            two_arr += str(int(item % 2))
            item = (item - item%2) / 2
        while len(two_arr) < n:
            two_arr += "0"
        arr2_two_arr_list.append(two_arr[::1])

    for item_index, item in enumerate(arr1_two_arr_list):
        hash_arr = ''
        for char_index, char in enumerate(item):
            if char == "1" or arr2_two_arr_list[item_index][char_index] == "1":
                hash_arr += "#"
            else:
                hash_arr += " "
        answer.append(hash_arr[::-1])

    return answer

# n, arr1, arr2 = 5, [9, 20, 28, 18, 11, ], [30, 1, 21, 17, 28, ]
# n, arr1, arr2 = 6, [46, 33, 33 ,22, 31, 50, ], [27, 56, 19, 14, 14, 10, ]
n, arr1, arr2 = 1, [0], [1]
print(solution(n, arr1, arr2))
