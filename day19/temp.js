function scoreByRank(data){
    if(!Array.isArray(data) || data.length === 0) return 'invalid input'

    let rankArr = []
    data.sort((a,b)=> b-a)
    for(let mark of data){
        rankArr.push({score: mark, rank: ''})
    }
    console.log(data, rankArr)
}
scoreByRank([100,10,90,80])