const board = [
    ["A","B","C","D","E"],
    ["N","I","G","E","R"],
    ["T","R","R","E","S"],
    ["E","G","O","P","S"],
    ["R","E","A","D","Y"]
]

function wordSearch(board, word){
    let rows = board.length
    let columns = board[0].length
    let len = word.length

    function searchRight(x,y){
        if(y + len > columns) // cek apakah keluar dari batas kolom
            return false
        
        for(let i = 0; i < len; i++){
            if(board[x][y + i] !== word[i]) // jika karakter tidak ditemukan
                return false 
        }
        return true 
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if(board[i][j] === word[0]){ // karakter pertama cocok
                if(searchRight(i,j)){ // cek ke kanan/baris
                    return true // kata ditemukan
                }
            }
        }
    }

    return false
}

const word = "ANT"
console.log(wordSearch(board, word))