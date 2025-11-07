function combinations(n,k){
    let newArr = []

    for(let i=1; i<=n; i++){
        for(let j=i; j<=n; j++){
            if(i===j)continue
            else {     
                newArr.push([i,j])
            }
        }
    }
    return newArr
}
// console.log(combinations(4,2))
// console.log(combinations(1,1))
// 3,3 => [1,1,2  1,1,3  1,2,1  1,2,2  1,2,3  1,3,1  1,3,2  1,3,3  2,1,1  2,1,2  2,1,3  2,2,1  2,2,3  ] // 1,1 => [[1,1]]
/*
function matrixMaking(nums, rows, cols){
    let newArr = Array(rows)
    // newArr.fill(0)
    for(let i=0; i<newArr.length; i++){
        newArr[i] = Array(cols)
        newArr[i].fill(nums[i])
    }
    nums = nums.slice(rows)
    for(let i=0; i<newArr.length; i++){
        for(let j=1; j<newArr[i].length; j++){
            // newArr[i].fill(nums[i])
            // console.log(nums.slice(rows))
            newArr[i][j] = nums[i]
            // console.log(newArr[i][j],i,j, nums[i])
        }
    }


    console.log(newArr)
}*/

function matrixMaking(nums, rows, cols){
    let newArr = Array(rows)
     for(let i=0; i<newArr.length; i++){
        newArr[i] = Array(cols)
        newArr[i].fill(nums[i])
    }
    for(let i=0; i<nums.length; i++){
        if(i !== 2*rows-1) console.log(nums[i], i, 2*rows-1)
        // console.log(nums[i])
    }
    // console.log(newArr)
}
matrixMaking([19,10,3,7,9,8,5,2,1,17,16,14,12,18,6,13,11,20,4,15], 5, 4)