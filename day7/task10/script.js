const listBar = document.querySelector('.list-bar')

document.addEventListener('keydown',(e)=>{
    if(e.key === 'A' && e.shiftKey === true){
        listBar.classList.add('show')
    }
})