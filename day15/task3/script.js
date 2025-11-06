function spiralMatrix(n){
    let matrix = Array(n)
    for(let i=0; i<matrix.length; i++){
        matrix[i] = Array(n)
        matrix[i].fill(0)
    }
    
    let num = 0
   
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            
            if(i===0){
                num++
                matrix[i][j] = num
            }
        }
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            
            if(j===n-1){
                
                matrix[i][j] = num
                num++
            }
        }
    }
    for(let i=matrix.length-1; i>=0; i--){
        for(let j=i; j>=0; j--){
        
            if(i === n-1 && i!== j){
                matrix[i][j] = num
                num++
            }
        }
    }
    for(let i=0; i<matrix.length; i++){
        for(let j=matrix.length-1; j>=0; j--){
            if(i !== 0 &&  i !== n-1 && j !== n-1){
                matrix[i][j] = num
                num++
            }
        }
    }
    
    let display = ''
    let arr = []
    for(let i=0; i<matrix.length; i++){
        display += ` [${matrix[i]}]
`
    }
    arr.push(display)
    console.log(`[
${display}]`)
}
spiralMatrix(4)