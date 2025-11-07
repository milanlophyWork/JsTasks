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
console.log(combinations(4,2))
console.log(combinations(1,1))