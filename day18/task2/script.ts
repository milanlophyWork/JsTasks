async function parallelLimit<T>(
    tasks: Array<()=> Promise<T>>,
    limit: number
): Promise<T[]>{
    const results: T[] = []
    let currentIndex = 0

    async function worker(): Promise<void> {
        while(currentIndex < tasks.length){
            const index = currentIndex++
            try{
                const result = await tasks[index]()
                results[index] = result
            }catch(error){
                results[index] = await Promise.reject(error)

            }
        }
    }
    const workers = Array.from(
        {length:Math.min(limit, tasks.length)}, ()=> worker()
    )

    await Promise.all(workers)
    return results
}

const tasks = [
    () => fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()),
    () => fetch('https://jsonplaceholder.typicode.com/posts/2').then(r => r.json()),
    () => fetch('https://jsonplaceholder.typicode.com/posts/3').then(r => r.json()),
    () => fetch('https://jsonplaceholder.typicode.com/posts/4').then(r => r.json()),
];

(async () => {
    const results = await parallelLimit(tasks, 2)
    console.log('All results', results)
})()