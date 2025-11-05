function composition(arr, n){

    let newArr = []
    function evaluateFn(arr){
        console.log(arr.slice(-1), arr)
    }
    evaluateFn(arr)
}
// console.log(composition([12,3,4],5))