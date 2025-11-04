const nameEl = document.getElementById('name')
const ageEl = document.getElementById('age')
const addressEl = document.getElementById('address')
const passEl = document.getElementById('pass')

const ulEl = document.createElement('ul')

nameEl.addEventListener('input', ()=> {
    const li = `
        <li>Name : ${nameEl.value}</li>
    `
    ulEl.innerHTML = li
    // document.body.appendChild(ulEl)
})

// document.body.appendChild(ulEl)

ageEl.addEventListener('input', ()=> {
    const li = `
        <li>Age: ${ageEl.value}</li>
    `
    ulEl.innerHTML = li
})
addressEl.addEventListener('input', ()=> {
    const li = `
        <li>Address: ${addressEl.value}</li>
    `
    ulEl.innerHTML = li
})


function submitHandler(e){
    e.preventDefault()
    document.body.appendChild(ulEl)

}
// document.body.appendChild(ulEl)