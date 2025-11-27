import { array } from "../../../utils/array.js"

export function binarySearch(arr: number[], item:number){
    if(!Array.isArray(arr) || arr.length === 0 || typeof item !== 'number' || isNaN(item)) return 'invalid input'

    for(let num of arr){
        if(typeof num !== 'number' || isNaN(num)) return 'invalid input'
    }
    if(array(arr, [...arr].sort((a,b)=> a-b)) === 'failed') return 'insert an array sorted in ascending order'

    let first: number = 0
    let last: number = arr.length
    let mid: number

    while(first < last){
        mid = Math.floor((first + last)/2)
        if(arr[mid] === item) return `element ${item} found at index ${mid}`
        if(arr[mid] < item){
            first = mid+1
            last = arr.length-1
        }
        if(arr[mid] > item) {
            first = 0
            last = mid-1
        }
        return 'element not found'
    }
}
// console.log(binarySearch([32,40,43,62], 40))
// console.log(binarySearch([1,2,4,5], 3))