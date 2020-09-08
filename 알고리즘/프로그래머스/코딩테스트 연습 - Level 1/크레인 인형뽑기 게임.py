def solution(board, moves):
    board_size = len(board)
    doll_stack = []
    prev_doll = 0
    answer = 0
    if len(board) == 0:
        return 0
    for move in moves:
        for i in range(board_size):
            if board[i][move-1] > 0:
                doll_stack.append(board[i][move - 1])
                if prev_doll == board[i][move-1]:
                    answer += 2
                    doll_stack.pop()
                    doll_stack.pop()
                    if len(doll_stack) > 0:
                        prev_doll = doll_stack[len(doll_stack)-1]
                    else:
                        prev_doll = 0
                else:
                    prev_doll = board[i][move-1]
                board[i][move-1] = 0
                break

    return answer

board = [
    [1, 2],
    [1, 2],
]
# board = [
#     [0,0,0,0,0],
#     [0,0,1,0,3],
#     [0,2,5,0,1],
#     [4,2,4,4,2],
#     [3,5,1,3,1],
# ]
moves = [1,1]

# moves = [1,5,3,5,1,2,1,4]
solution(board, moves)
