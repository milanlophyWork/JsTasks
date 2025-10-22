const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

document.querySelector('.my-div').addEventListener('scroll',()=>{
    bar1.classList.add('bar1-div')
    bar2.classList.add('bar2-div')
    bar3.classList.add('bar3-div')
})