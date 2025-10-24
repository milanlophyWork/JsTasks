// Fetch details sequentually from two APIs
async function fetchDetails(){
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data1 = await res1.json()

    const res2 = await fetch('https://jsonplaceholder.typicode.com/users')
    const data2 = await res2.json()
    const ul =document.createElement('ul')
    
    await data2.forEach(async userInfo => {
        const name = userInfo.name
        const email = userInfo.email
        const id = userInfo.id

        await data1.forEach(post => {
            if(post.userId === id){
                let html = `
                    <div>
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${post.title}</p>
                    </div>
                `
                const li = document.createElement('li')
                li.innerHTML= html
                ul.appendChild(li)
            }
        })
        document.body.appendChild(ul)
    })
}
fetchDetails()