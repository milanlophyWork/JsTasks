export function array(originalOutput, testCaseOutput){
    let status = 'passed'
    if(Array.isArray(originalOutput)){
        if(originalOutput.length === testCaseOutput.length){
                  
            for(let i=0; i<originalOutput.length;i++){
                if(originalOutput[i] !== testCaseOutput[i]){
                    status = 'failed' 
                    break
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