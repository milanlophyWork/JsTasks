export function convertSec(sec:number){
    if(typeof sec !== 'number' || isNaN(sec) || sec <= 0) return 'invalid input'
    let obj: {[key : string]: number} = {0.5: 30, 0.25: 15, 0.75: 45}

    let hours:number = sec/3600
    let decimal = hours - Math.floor(hours)

    for(let key of  Object.keys(obj)){
        if(decimal === Number(key)) return `${Math.floor(hours)} hours ${obj[key]} minutes`
    }
    if(decimal === 0) return `${hours} hours`
    else return `${Math.floor(hours)} hours ${decimal.toFixed(2)* 100} minutes`

}
console.log(convertSec(7200))