const inputElement = document.querySelector('.key-details')
const tbody = document.getElementById('body-id')
const output = []

inputElement.addEventListener('keydown',(e)=> {
    const out = {
        key: e.key,
        code: e.code,
        time: e.keyCode
    }
    output.push(out)

    if(output.length > 10) output.shift()
    console.log(output)
    displayTable()
})
function displayTable(){
    inputElement.value = ''
    tbody.innerHTML = ''
    output.forEach(item=> {
        const row = `
        <tr>
            <td>${item.key}</td>
            <td>${item.code}</td>
            <td>${item.time}</td>
        </tr>
        `
        tbody.innerHTML += row
    })
}