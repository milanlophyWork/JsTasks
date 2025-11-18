const liBar = document.querySelectorAll('li')
const div:Node = document.createElement('div')

liBar.forEach(li => {
    li.addEventListener('mouseover', ()=>{
        div.textContent = li.textContent
        div.classList.add('tooltip')
        document.body.appendChild(div)
        
    })
    li.addEventListener('mouseleave', ()=>{
        const div = document.querySelector('.tooltip')
        div?.classList.remove('tooltip')
        document.body.removeChild(div)  
    })
})
