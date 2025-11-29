export function analyzeHeatmap(heatmap: number[][]){
    if(!Array.isArray(heatmap) || heatmap.length === 0) return 'invalid input'

    let sum:number = 0
    let count:number = 0
    let obj: {[key: string]: number| number[]} = {
        minTemp : Infinity,
        maxTemp : -Infinity,
        averageTemp: 0,
        hottestPoint: [],
        coldestPoint : []
    }

    for(let i=0; i<heatmap.length ; i++){
        if(!Array.isArray(heatmap[i])) return 'invalid input'
        
        for(let j=0; j<heatmap[i].length; j++){
            if(typeof heatmap[i][j] !== 'number' || isNaN(heatmap[i][j])) return 'invalid input'

            if(heatmap[i][j] < obj.minTemp){
                obj.minTemp = heatmap[i][j]
                obj.coldestPoint.push([i,j])
            }
            if(heatmap[i][j] > obj.maxTemp){
                obj.maxTemp = heatmap[i][j]
                obj.hottestPoint.push([i,j]) 
            }
            sum += heatmap[i][j]
            count++
        }
       
    };
    obj.averageTemp = Number((sum/count).toFixed(1))
    obj.hottestPoint = obj.hottestPoint.pop()
    obj.coldestPoint = obj.coldestPoint.pop()

    return obj
}
// console.log(analyzeHeatmap([[30,32,35],[28,40,33],[31,36,38]]))
