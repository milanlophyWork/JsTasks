
function formatFn(date: Date, format: string){
    let timeArr = date.toString().split('GMT')[0].slice(-9).split(':')
    let formatStr = format.split(',')
    let separator = ['/', '-']
    let dateFormat, timeFormat

    let dateSeparator = ''
    separator.forEach(item =>{
        if(formatStr[0].includes(item)) dateFormat = formatStr[0].split(item)
        dateSeparator = item
    })
    if(formatStr[1].includes(':')) timeFormat = formatStr[1].split(':')
    if(dateFormat.length !== 3 || timeFormat.length !== 3) return 'invalid format'


    let dateObj = []
    let timeObj = []
    for(let i=0; i<dateFormat.length; i++){
        dateObj.push({item: dateFormat[i], length: dateFormat[i].length})
        timeObj.push({item: timeArr[i], length: timeFormat[i].length})
    }

    let timeStr = ''
    for(let t of timeObj){
        // console.log(t.item.length, t.length,)
        if(t.item === Number(t.item) && t.item.length !== t.length) return 'invalid input'
        else t.item = Number(t.item)
        
        timeStr += `${t.item}:`
    }
    let dateStr = ''
    let year = [{sym: 'Y', fn: date.getFullYear()}, {sym: 'M', fn: date.getMonth() + 1}, {sym: 'D', fn: date.getDate()}]
    for(let i=0; i<dateObj.length; i++){
        // console.log(year[i].sym, dateObj[i].item)
        if(dateObj[i].item.includes(year[i].sym)) {
            dateStr += `${year[i].fn}${dateSeparator}`
        }
    }
    return `${dateStr.slice(0,-1)}, ${timeStr.slice(0,-1)}`

}
console.log(formatFn(new Date(2025, 1,4, 13, 44, 3),'YY-M-D, H:mm:ss'))