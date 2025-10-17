
function numCount(num){
    let str = String(num)
    let count = 0

    for(char of str){
        count++  
    }
    return count
}

function numPower(num){
    const count = numCount(num)
    let str = String(num)
    let power = []

    for(char of str){
        power.push(char**count)
    }
    return power
}

function armStrong(num){
    const power = numPower(num)
    
    const armStrong = power.reduce((acc,curr)=> acc+curr,0)
    console.log(armStrong)
    if(num===armStrong){
        return true
    }else{
        return false
    }
}
console.log(armStrong(370))