export function twoArrays(arr1: unknown[], arr2: unknown[]){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return 'invalid input'

    
    let mySet= new Set()
    arr1.forEach(item => mySet.add(item))
    arr1 = [...mySet]

    let intersection: unknown[] = []
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])) intersection.push(arr1[i])
    }

    return intersection.length === 0 ? 'No common elements' : intersection
}
// console.log(twoArrays([1,2,3],[2,3,4]))
