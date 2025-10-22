function componentToHex(a){
    const hex = a.toString(16)
    return a.length === 1 ? '0'+ hex : hex
}
const rgbToHex = (r,g,b)=> {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

console.log(rgbToHex(255,165,0)) // #FFA500