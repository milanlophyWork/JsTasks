const progress = document.querySelector('.progress')
const textBar = document.querySelector('.text')


textBar.addEventListener('scroll',()=>{
    const movedLength = textBar.scrollTop
    const scrollLength = textBar.scrollHeight - textBar.clientHeight

    const length = (movedLength/scrollLength) * 100
    progress.classList.add('progress1')

    if(length === 0){
        progress.style.width = '0%'
    }else if(length > 0 && length < 30){
        progress.style.width = '20%'
    }else if(length >= 30 && length < 65){
        progress.style.width = '45%'
    }else if (length >= 65 && length < 85){
        progress.style.width = '65%'
    }else if(length >= 85 && length < 100){
        progress.style.width = '85%'
    }else{
        progress.style.width = '100%'
    }
})