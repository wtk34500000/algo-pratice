/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "R") {
                count += checkTop(board, i, j)
                count += checkBottom(board, i, j)
                count += checkLeft(board, i, j)
                count += checkRight(board, i, j)
            }
        }
    }
    return count
};

const checkTop = (board, i, j) => {
    let count = 0
    let pass = 0
    let block = -1
    while (i >= 0) {
        if (board[i][j] === "p") {
            pass = i
            count = 1
            break
        } else if (board[i][j] === "B") {
            block = i
        }
        i--
    }
    return pass > block ? count : 0;
}

const checkBottom = (board, i, j) => {
    let count = 0
    let pass = 0
    let block = board.length
    while (i < board.length) {
        if (board[i][j] === "p") {
            pass = i
            count = 1
            break
        } else if (board[i][j] === "B") {
            block = i
        }

        i++;
    }
    return pass < block ? count : 0;
}

const checkLeft = (board, i, j) => {
    let count = 0
    let pass = 0
    let block = -1
    while (j >= 0) {
        if (board[i][j] === "p") {
            pass = j
            count = 1
            break
        } else if (board[i][j] === "B") {
            block = j
        }
        j--
    }
    return pass > block ? count : 0;
}

const checkRight = (board, i, j) => {
    let count = 0
    let pass = 0
    let block = board.length
    while (j < board.length) {
        if (board[i][j] === "p") {
            pass = j
            count = 1
            break
        } else if (board[i][j] === "B") {
            block = j
        }
        j++
    }
    return pass < block ? count : 0;
}