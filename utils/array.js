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
        status = originalOutput === testCaseOutput ? 'Passed' : 'Failed'
    }
    return status
}
