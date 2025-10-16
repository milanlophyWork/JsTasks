// FETCH 

async function fetchUser(){
    try{
        const res = await fetch('https://randomuser.me/api/?results=5')
        const data = await res.json()
        const users = await data.results.forEach(user => {
            
            const ul = document.querySelector('.data')
            const li = document.createElement('li')
            
            const image = document.createElement('img')
            image.src = user.picture.medium

            const name = document.createElement('p')

            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
            const email = document.createElement('p')
            email.textContent = user.email
            
            li.appendChild(image)
            li.appendChild(name)
            li.appendChild(email)

            ul.appendChild(li)
        })
    }catch{
        console.log('Error')
    }
}

fetchUser()