// String pattern challenge
function strPattern(n){
    let text=65
    for(let i=1; i<=n;i++){
        for(let j=i; j<=i;j++){
            console.log(String.fromCharCode(text).repeat(j))
        }
        text++
    }
}
strPattern(5)