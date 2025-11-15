function displayNotifications(notifications: string[]){
    console.log(notifications[0])
    for(let i=1; i<notifications.length; i++){
        setTimeout(()=> {
            console.log(notifications[i])
        },2000)   
    }
}