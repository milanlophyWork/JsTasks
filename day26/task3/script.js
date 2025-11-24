const dialog = document.querySelector('dialog')
const close = document.querySelector('dialog button')

dialog.showModal()

close.addEventListener('click', ()=>{
    closeModal()
})

window.addEventListener('keyup', e=>{
    if(e.key === 'Escape') closeModal()
})

dialog.addEventListener('mousedown', e=> {
    if(!e.target.closest('div')) closeModal()
})

function closeModal(){
    dialog.close()
}