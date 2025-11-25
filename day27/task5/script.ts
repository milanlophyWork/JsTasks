import {array} from '../../utils/array.js'

export function intersection<T>(arr1: T[], arr2: T[]){
    if(!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length === 0 && arr2.length === 0) return 'invalid input'
    
    let myArr = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(array(arr1[i], arr2[j])=== 'passed') myArr.push(arr1[i])
        }
    }
    return myArr
}
// console.log(intersection([1,[2],3], [[2],3,4]))