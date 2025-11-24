/*
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

}*/
function formatFn(date, format) {
    if (!(date instanceof Date))
        return 'invalid date';
    if (typeof format !== "string")
        return 'invalid format';
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const map = {
        'YYYY': date.getFullYear(),
        'YY': String(date.getFullYear()).slice(-2),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'M': String(date.getMonth() + 1),
        'DD': String(date.getDate()).padStart(2, '0'),
        'D': String(date.getDate()),
        'HH': String(hours24).padStart(2, '0'),
        'H': String(hours24),
        'hh': String(hours12).padStart(2, '0'),
        'h': String(hours12),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'm': String(date.getMinutes()),
        'ss': String(date.getSeconds()).padStart(2, '0'),
        's': String(date.getSeconds()),
        'A': hours24 >= 12 ? 'PM' : 'AM',
        'a': hours24 >= 12 ? 'pm' : 'am'
    };
    return format.replace(/YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|A|a/g, match => map[match]);
}
console.log(formatFn(new Date(2025, 1, 4, 13, 44, 3), 'YY-M-D, H:m:ss A'));
