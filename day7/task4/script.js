const inputElement = document.querySelector('.key-details')

const table = document.createElement('table')
table.style.border= '1px solid black'
table.style.width = '100%'

const thead= document.createElement('thead')

const headingRow = document.createElement('tr')
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')

th1.textContent = 'Key Pressed'
th2.textContent = 'Code (alphabetic)'
th3.textContent = 'Key code (number)'

headingRow.appendChild(th1)
headingRow.appendChild(th2)
headingRow.appendChild(th3)

thead.appendChild(headingRow)
table.appendChild(thead)
const tbody = document.createElement('tbody')

inputElement.addEventListener('keydown',rowInsertion)

let count = 0
function rowInsertion(e){
    count++
    if(count > 10){
        let first = tbody.firstElementChild
        tbody.removeChild(first)
    }
    rowCreation(e)
    console.log(count)

}

function rowCreation(e){
    let tr, td1, td2, td3
    tr = document.createElement('tr')
    td1 = document.createElement('td')
    td2 = document.createElement('td')
    td3 = document.createElement('td')


    td1.innerText = e.key
    td2.innerText = e.code
    td3.innerText = e.keyCode

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
}
table.appendChild(tbody)
document.body.appendChild(table)
