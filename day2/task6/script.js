
const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [10,20,30,40,50]
const arr3 = [15,25,35,45,55]

function divBy3(arr){
    const threeMultiples = []
    arr.forEach(item => {
        if(item % 3 === 0){
            threeMultiples.push(item)
        }
    })
    return threeMultiples
}
// console.log(divBy3([1,2,3,4,5,6,7,8,9]))

function addMulOf3(arr){

    const newArr = divBy3(arr)

    let sum =0
    for(let i=0; i<newArr.length; i++){
        sum+=newArr[i]
    }
    return sum
}
console.log(addMulOf3(arr1))
console.log(addMulOf3(arr2))
console.log(addMulOf3(arr3))