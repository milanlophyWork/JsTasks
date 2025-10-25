const list = document.querySelectorAll('.hidden')

document.addEventListener('keydown',(e)=>{
    if(e.key === 'a' && e.shiftKey === true){
        list.forEach(li => {
            if(li.className === 'hidden'){
                li.classList.remove('hidden')
                li.classList.add('visible')
            
            }else{
                li.classList.remove('visible')
                li.classList.add('hidden')
            }
        })
        
    }
})

