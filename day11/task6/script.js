function orderedChain(arr){
    let newArr = []
    let sorted = [...arr].sort((a,b)=> a-b)
    let mySet = new Set()

    sorted.forEach(item => {
        mySet.add(item)
    })

    let firstItemPossibilities = mySet.size - 4
    let index = Math.floor(Math.random()*firstItemPossibilities)
    let firstItem = sorted[index]
    
    newArr.push(firstItem)
    if(arr.length > 50) {
        console.log('Maximum input is 50')
        return
    }
    if(newArr.length <=3){
        let j =0
        for(let i=0; i<=sorted.length;i++){
            if(newArr.length<=3 && newArr[j]<sorted[i]){
                newArr.push(sorted[i]) 
                j++
            }
        }   
    }    
    console.log(newArr)
}
orderedChain([10,20,15,30,22,40])
orderedChain([6,9,2,0,5,7,8,2,8])
orderedChain([456, 657, 335, 123, 987, 354, 434])
orderedChain([56, 98, 23 , 10, 0, 20, 50, 45, 103, 678])
orderedChain([23, 10, 34, 28, 55, 32, 42])
orderedChain([243, 123, 543, 234, 567])
orderedChain([1000, 2345, 1234, 4321, 567, 235])
orderedChain([1, 3, 0, 3, 0, 2, 1])
orderedChain([234, 23, 12, 43, 12, 0])
orderedChain([6789, 3455, 2134, 0, ])
orderedChain([34, 65, 12, 43, 2, 12, 23])
orderedChain([1324, 8769, 7890, 3425, 6754, 9674])
orderedChain([90, 100, 32, 50, 23, 10])
orderedChain([56, 32, 45, 12, 33, 668])
orderedChain([11, 44, 22, 22, 44, 77])
orderedChain([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,81,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,51,52,53,54])