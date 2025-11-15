export function FrequencySort(arr: number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let freq: {[key: string]: number}= {}
    let newArr: {[key: string]: number|string} = []
    let result: number[] = []
    
    for(let num of arr) {
        if(typeof num !== 'number' || isNaN(num)) return 'invalid input'

        freq[num] = (freq[num] || 0) + 1
    }
    Object.keys(freq).forEach(k=> {
        newArr.push({'num': k, 'fre': freq[k]})
    })
    newArr.sort((a,b)=> a.num-b.num)
    newArr.sort((a,b)=> b.fre - a.fre)

    newArr.forEach(item => {
        for(let i=0 ; i< item.fre; i++){
            result.push(Number(item.num))
        }
        
    })

    return result
}
// console.log(FrequencySort([4,5,6,5,4,3]))