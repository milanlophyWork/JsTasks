const scrollBtn = document.querySelector('.to-top')
const Container = document.querySelector('.container')

Container.addEventListener('scroll', ()=>{
    if(Container.scrollTop > 200){
        scrollBtn.classList.add('show')
    }else {
        scrollBtn.classList.remove('show')
    }
})

scrollBtn.addEventListener('click', ()=> {
    Container.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

const progressBar = document.getElementById("progress-bar");

Container.addEventListener("scroll", () => {
    const moved = Container.scrollTop;
    const total = Container.scrollHeight - Container.clientHeight;

    const percent = (moved / total) * 100;
    progressBar.style.width = percent + "%";
});
