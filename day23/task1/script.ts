export function matrixRotate(matrix : number[][]){
    if(!Array.isArray(matrix) || matrix.length === 0) return 'invalid input'

    let cols:number = matrix[0].length
    const rows:number = matrix.length

    for(let i=0 ;i<rows; i++){

        if(!Array.isArray(matrix[i])) return 'invalid input'
        if(matrix[i].length !== rows) return 'not a square matrix'
        for(let j=i; j<cols; j++){
            if(typeof matrix[i][j] !== 'number' || isNaN(matrix[i][j])) return 'invalid input'
            const temp = matrix[i][j]
            if(i !== j) {
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
        matrix[i].reverse()
    }
    return matrix
}
// console.log(matrixRotate([[1,2,3], [4,5,6], [7,8,9]]))

