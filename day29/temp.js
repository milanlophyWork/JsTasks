import {array} from '../utils/array.js'
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
// console.log(bubbleSort([2,4,1,3]))

function quickSort(arr){
    let pivot = arr[0]
    let left = []
    let right = []

    for(let i=0; i<arr.length; i++){
        if(arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
    }
    // if(left.length > 1) quickSort(left)
    //     if(right.length > 1) quickSort(right)
    console.log(left,pivot, right)
}
// quickSort([2,4,1,3])

function linearSearch(num, arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num) return `element ${num} found at index ${i}`
    }
    return 'element not found'
}
// console.log(linearSearch(3, [1,4,3,2,5]))

function binarySearch(arr, item){
    if(array(arr, [...arr].sort()) === 'failed') return 'insert an array sorted in ascending order'

    let first = 0
    let last = arr.length-1
    let mid

    while(first <= last){
        mid = Math.floor((first + last)/2)
        console.log(mid,first,last)
        if(arr[mid] === item) return `element ${item} found at index ${mid}` 
        else if(arr[mid] < item){
            first = mid+1
            last = arr.length-1
          
        }else {
            first = 0
            last = mid-1
           
        }
        return 'element not found'
    }
}
console.log(binarySearch([32, 40, 43, 62], 43))

// function insertionSort(arr){
//     for(let i=0 ;i< arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]> arr[j]){
//                 let item = arr.splice(j,1,arr[i])
//                 arr.splice(i, 1, ...item)
//             }
//         }
//     }
//     return arr.reverse()
// }
// console.log(insertionSort([2,4,1,1,3,5]))

function selectionSort(arr){
    let start = 0
    let end = arr.length-1

    while(start !== end){
        let min = Infinity
       
        for(let i=start; i<= end; i++){
            if(arr[i]<min){
                min = arr[i]
            }
        }

        let index = arr.lastIndexOf(min)
        
        let temp = arr[start]
        arr[start] = min
        arr[index] = temp
        start++
    }
    return arr
}
// console.log(selectionSort([2,1,4,3]))

function insertionSort(arr){
    for(let i=0 ;i< arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]> arr[j]){
                let item = arr.splice(j,1)
                arr.splice(i, 0, item[0])
            }
        }
    }
    return arr
}
// console.log(insertionSort([2,1,4,1,3]))


function poly(degree, coefficients, x){
    // console.log('Coefficients must be from higher order to lower order')
    if(coefficients.length !== degree + 1) return 'Enter correct number of coefficients'
    let sum = 0
    let temp
    for(let i=0; i<coefficients.length; i++){
        temp = coefficients[i] * (x ** degree)
        sum += temp
        degree--
    }
    return sum
}

console.log(poly(3, [2,-6,2,-1], 3)) // f(x) = 2x^3 -6x^2 + 2x -1 // x=3