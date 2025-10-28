// All permutations of a string
function getPermutations(str){
    if(str.length <= 1) return [str]

    let permutations = []
    for(let i=0; i<str.length; i++){
        const currentChar = str[i]
        const remaining = str.slice(0, i) + str.slice(i+1) // slice(start, end) includes characters from start index up to nut not including end. (slice(0) everything as no end specified, slice(1) starts from 1 till end, slice(0,1) starts at 0 end before 1 ie only the 0th char)
        const remainingPerms = getPermutations(remaining)

        for(let perm of remainingPerms){
            permutations.push(currentChar + perm)
        }
    }
    return permutations
}
console.log(getPermutations('abc'))