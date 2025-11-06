import { array } from "../utils/array.js"
/*function addZero(matrix){
    if(!Array.isArray(matrix) || matrix.length === 0) return 'invalid input'

    let newMatrix = []
    let newValues = []

    let row
    let column

    for(let i=0; i<matrix.length; i++){
        if(!Array.isArray(matrix[i]) || matrix[i].length === 0 ) return 'invalid input'

        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === 0){
               row = i
               column = j
               console.log(row, column)
            }
        }        
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(i !== row && j !== column) newValues.push(matrix[i][j])
            else newValues.push(0)
        }        
        newMatrix.push(newValues)
        newValues = []

    }
    return newMatrix
}
*/
