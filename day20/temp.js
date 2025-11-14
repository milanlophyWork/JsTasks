function TeamSelection(players, teamSize){
    if(teamSize <= 0) return 'invalid input'

   let temp = []
    let newArr = []
    let result = []
    if(players.length === teamSize) return [players]
    else if(teamSize > players.length) return 'no enough players'
    else{
        
        for(let i=0; i<players.length; i++){
            for(let j=i; j<players.length; j++){
                if(newArr.length !== teamSize) newArr.push(players[j])
                else {
                    result.push([...newArr])
                    newArr = []
                   
                }
            }
        } 
        
    }
    return result
}
console.log(TeamSelection(['a', 'b', 'c', 'd'], 3))