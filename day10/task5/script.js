function countDown(targetDate){
    const target = new Date(targetDate).getTime()

    const timer = setInterval(()=> {
        const now = new Date().getTime()
        const distance = target - now

        if(distance <= 0){
            clearInterval(timer)
            console.log('Countdown completed!')
            return
        }

        const days = Math.floor(distance/ (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ))
        const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60))/ 1000)

        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s remaining`)
    },1000)
}
countDown("2025-10-30")