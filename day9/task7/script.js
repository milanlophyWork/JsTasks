async function fetchThree(){
    
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data1 = await res1.json()
    
    const res2 = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data2 = await res2.json()

    
    await data2.forEach(async userInfo => {
        
        const id = userInfo.id
        const name = userInfo.name
        const email = userInfo.email
        
        const table = document.createElement('table')
        table.style.border = '1px solid black'
        table.style.width = '100%'

        const thead = document.createElement('thead')
        const tbody = document.createElement('tbody')
        
        const th1 = document.createElement('th')
        const th2 = document.createElement('th')
        const th3 = document.createElement('th')

        th1.textContent = `No. ${id}`
        th2.textContent = `User:  ${name}`
        th3.textContent = `Email:  ${email}`
        
        thead.appendChild(th1)
        thead.appendChild(th2)
        thead.appendChild(th3)
        table.appendChild(thead)

        await data1.forEach(user => {
            if(user.userId === id){
                const tr = document.createElement('tr')
                let html = ` 
                        <td>Post : ${user.id}</td>
                        <td>Title : ${user.title}
                `
                tr.innerHTML = html
                tbody.appendChild(tr)
                table.appendChild(tbody) 
            }
            document.body.appendChild(table)
        })
    })
}
fetchThree()