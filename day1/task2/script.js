// PATTERN

function word(text){
    let pattern = ''
    for(let i = 0; i<= text.length; i++){
        
        if(text[i]){
            pattern = pattern + text[i]
            console.log(pattern)

        }else{
           let newPattern = ''
           
            for(i = 1; i< text.length; i++){
                if(text[i]){
                    newPattern = newPattern + text[i]
                } 
                console.log(newPattern)
            }
        }
        
    }
}
word('CAT')