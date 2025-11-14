/*
function TeamSelection(players: string[], teamSize: number){
    if(teamSize > players.length) return 'no enough players'
    if(teamSize <= 0) return 'invalid input'
    if(players.length === teamSize) return [...players]

    let result:string[][] = []
    function combine(start: number, current: string[]){
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
    combine(0, [])
    return result
}*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function TeamSelection(players, teamSize) {
    if (players.length === teamSize)
        return __spreadArray([], players, true);
    if (players.length < teamSize)
        return 'no enough players';
    if (teamSize <= 0)
        return 'invalid input';
    var result = [];
    function combine(start, current) {
        if (current.length === teamSize) {
            result.push(__spreadArray([], current, true));
            return;
        }
        for (var i = start; i < players.length; i++) {
            current.push(players[i]);
            combine(i + 1, current);
            current.pop();
        }
    }
    combine(0, []);
    return result;
}
console.log(TeamSelection(['a', 'b', 'c'], 2)); // Not complete 
