
export function validEmail(mails: string[]){
    if(!Array.isArray(mails) || mails.length === 0) return 'invalid input'

    let local: string[] = ['!', '#','$', '%', '^', '&', '*' ,'(',')', '+', '=','{','}','[',']','|',':',';', '?', '<', '>' , '~']  
    let invalid: string[] = []  

    for(let mail of mails){
        if(typeof mail !== 'string' || !mail.trim()) return 'invalid input'
        if(mail.includes(' ') || mail.slice(0,1) === '.' || mail.slice(-1) === '.' || mail.includes('..')) invalid.push(mail)

        
        let splitAt = mail.split('@')
    
        if(splitAt.length !== 2) invalid.push(mail)
        if(splitAt[0].length === 0) invalid.push(mail)
        let splitDot = splitAt[1].split('.')

        if(splitDot.length <2) invalid.push(mail)
        if(splitDot[splitDot.length-1].length <2) invalid.push(mail)
        if(splitAt[1].lastIndexOf('.') === 0) invalid.push(mail)

        if(splitAt[1].includes('-')) invalid.push(mail)
        for(let sym of local) {
            if(mail.includes(sym)) invalid.push(mail)
            if(splitAt[1].includes(sym)) invalid.push(mail)
        }
        
    }
    
    for(let i=0; i<invalid.length; i++){
        if(mails.includes(invalid[i])) {
            mails.splice(mails.indexOf(invalid[i]),1)
        }
    }

    return mails
}
// console.log(validEmail(['mi12l@gmail.com', 'abc@', 'ok@gmail.com']))
