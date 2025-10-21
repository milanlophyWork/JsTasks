// Word frequency counter
function wordFrequency(str){
    let arr = str.split(',').toString().toLowerCase().replaceAll(',','').replaceAll('!','').split(' ')
    let count = 1
    let newCount
    let obj = {}

    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj){
            newCount = count+1
            obj[arr[i]]=newCount
        }else{
            obj[arr[i]]=count
        }
    }
    console.log(obj)
}
wordFrequency('Hello hello world, world!')