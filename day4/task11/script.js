function generateSpiral(n){
    if(n<-0) return []

    const matrix = Array.from({length: n}, ()=> Array(n).fill(0)) // Array.from(items, mapFn) | length: n => create a sequence of Arrays [Array(n).fill(0) => Array with n items which are zero ] of length n 
    
    let top = 0, bottom = n-1
    let left = 0, right = n-1
    let num = 1

    while(left <= right && top <= bottom){

        for(let j=left; j<=right; j++){ // top row
            console.log(top, j)
            matrix[top][j] = num++ // presently every item is zero. so matrix[0][0] = num++ => 1 , matrix[0][1] = 2, matrix[0][2] = 3, j<=2 so out of loop, top =1
        }
        top++

        for(let i=top; i<=bottom; i++){ // right column
            matrix[i][right] = num++ // matrix[1][2] = 4, matrix[2][2] = 5 i<=bottom ie 2 so out of loop, right = 1
        }
        right--

        if(top<=bottom){
            for(let j=right; j>=left; j--){ // bottom row
                matrix[bottom][j] = num++ // matrix[2][1] = 6, matrix[2][0] = 7 0>= left (0) so out of loop bottom = 1
            }
            bottom--
        }
        if(left <= right){
            for(let i=bottom; i>=top; i--){
                matrix[i][left] = num++ // matrix[1][0] = 8  1>=top (top is set to 1 now ) so out of loop. left = 1
            }
            left++ 
        }
    }

    for(const row of matrix){
        console.log(row.map(x=> String(x).padStart(3, ' ')).join(' '))
    }
}
generateSpiral(3)