function countDown(targetDate){
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const currentDate = new Date().getDate()
    const arr = targetDate.split('-')
    let targetYear=Number(arr[0])
    let targetMonth = Number(arr[1])
    let date = Number(arr[2])

    let ThirtyDays = [4,6,9,11]
    
    // if(targetYear >= currentYear){
    //     if(targetYear - currentYear === 0){
    //         targetMonth -currentMonth === 0 ? date - currentDate : 31 - 9,4,6,11
    //     }
    // }else return 'invalid entry'

    // if(targetYear >= currentYear){
    //     console.log(targetYear - currentYear)
    // }else return 'invalid entry'
    
    console.log(arr,currentMonth)
}
// countDown('2025-10-26')