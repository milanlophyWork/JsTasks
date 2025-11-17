function SeatingArrangements(people: string[]){
    let newArr: string[][] = []
    for(let j=0; j<people.length-1; j++){
        let deleted = people.splice(j,1)       
        people.push(...deleted)
       
        newArr.push([...people])
        newArr.push([...people].reverse())
    }
    return newArr
}
console.log(SeatingArrangements(['A','B','C']))
