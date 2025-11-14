export function array(originalOutput, testCaseOutput){
    let status = 'passed'
    if(Array.isArray(originalOutput)){
        if(originalOutput.length === testCaseOutput.length){
            
            for(let i=0; i<originalOutput.length;i++){
                if(Array.isArray(originalOutput[i]) && originalOutput[i].length !== 0)return  status = array(originalOutput[i], testCaseOutput[i])
                else if(typeof originalOutput[i] === 'object' && !Array.isArray(originalOutput[i]) && originalOutput[i] !== null)
                    return status = objCheck(originalOutput[i],testCaseOutput[i])
                else{
                    if(originalOutput[i] !== testCaseOutput[i]){
                        status = 'failed' 
                        break
                    }
                }
            }
        }else status = 'failed'
    }else{
        status = originalOutput === testCaseOutput ? 'passed' : 'failed'
    }
    return status
}

export function objCheck(originalOutput, testCaseOutput){
    let status = 'passed'
    
    if(typeof originalOutput !== 'object'){
        if(originalOutput !== testCaseOutput) {
            return status = 'failed'
        }
    }else{
        if(Array.isArray(originalOutput) || originalOutput === null) return status = 'failed'
        
        let keysOrg = Object.keys(originalOutput)
        let keysTest = Object.keys(testCaseOutput)

        if(keysOrg.length !== keysTest.length) {
            return status = 'failed'
        }

        keysOrg.forEach(key =>{
            if(!testCaseOutput.hasOwnProperty(key) || originalOutput[key]!==testCaseOutput[key]){
                status = 'failed'
            }
        })
    }
    return status
}
/*
export function objDeepCheck(originalOutput, testOutput){
    let status = 'passed'

    if(typeof originalOutput !== 'object'){
        if(originalOutput !== testOutput) {
            return status = 'failed'
        }
    }else{
        if(Array.isArray(originalOutput) || originalOutput === null) return status = 'failed'
        
        let keysOrg = Object.keys(originalOutput)
        let keysTest = Object.keys(testOutput)

        if(keysOrg.length !== keysTest.length) {
            return status = 'failed'
        }

        keysOrg.forEach(key =>{
            if(!testOutput.hasOwnProperty(key)) status = 'failed'
            else {
                if(Array.isArray(originalOutput[key]) || originalOutput[key] === null) status = nestedArr(originalOutput[key], testOutput[key])
                else if(typeof originalOutput[key] === 'object') status = objDeepCheck(originalOutput[key], testOutput[key])
                else {
                    if(originalOutput[key] !== testOutput[key]) status = 'failed'
                }
            }
            
        })
    }
    return status
}

export function nestedArr(originalOutput, testOutput){
    let status = 'passed'
    if(Array.isArray(originalOutput)){
        if(originalOutput.length === testOutput.length){
            
            for(let i=0; i<originalOutput.length;i++){
                if(Array.isArray(originalOutput[i])) return  status = nestedArr(originalOutput[i], testOutput[i])
                else if(typeof originalOutput[i] === 'object' && !Array.isArray(originalOutput[i]) && originalOutput[i] !== null)
                    return status = objDeepCheck(originalOutput[i],testOutput[i])
                else{
                    if(originalOutput[i] !== testOutput[i]){
                        status = 'failed' 
                        break
                    }
                }
            }
        }else status = 'failed'
    }else{
        status = originalOutput === testOutput ? 'passed' : 'failed'
    }
    return status
} */

export function deepCheck(a,b){
    if(a===b) return 'passed'
    // it type is mismatch or one of them is null
    if(typeof a !== typeof b || a===null || b===null) return 'failed'

    //arrays
    if(Array.isArray(a)){
        if(!Array.isArray(b) || a.length !== b.length) return 'failed'
        for(let i=0; i<a.length; i++){
            if(deepCheck(a[i], b[i]) === 'failed') return 'failed'
        }
        return 'passed'
    }

    // objects
    if(typeof a === 'object'){
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        if(keysA.length !== keysB.length) return 'failed'

        for(const key of keysA){
            if(!b.hasOwnProperty(key)) return 'failed'
            if(deepCheck(a[key], b[key]) === 'failed') return 'failed'
        }
        return 'passed'
    }

    return 'failed'
}