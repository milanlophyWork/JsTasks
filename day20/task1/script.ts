function TeamSelection(players: string[], teamSize: number){
    if(players.length === teamSize) return [...players]
    if(players.length < teamSize) return 'no enough players'
    if(teamSize <= 0) return 'invalid input'

    let result : string[][] = []
    function combine(start:number, current: string[]){
        if(current.length === teamSize){
            result.push([...current])
            return
        }

        for(let i=start; i<players.length; i++){
            current.push(players[i])
            combine(i+1, current)
            current.pop()
        }
    }
    combine(0,[])
    return result
}
console.log(TeamSelection(['a', 'b', 'c'], 2)) // Not complete 