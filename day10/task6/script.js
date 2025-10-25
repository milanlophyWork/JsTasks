const inputEl = document.getElementById('text')

const table = document.createElement('table')
table.style.width = '70%'
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')

th1.textContent = 'Key Pressed'
th2.textContent = 'Code'
th3.textContent = 'TimeStamp'

thead.appendChild(th1)
thead.appendChild(th2)
thead.appendChild(th3)

table.appendChild(thead)
let count = 0
inputEl.addEventListener('keyup',(e)=> {
    let first = tbody.firstElementChild

    if(count >=10){
        tbody.removeChild(first)
    }
    count++
    
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')

    td1.textContent = e.key
    td2.textContent = e.code
    td3.textContent = e.timeStamp.toFixed(3)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
    
})
table.appendChild(tbody)
document.body.appendChild(table)