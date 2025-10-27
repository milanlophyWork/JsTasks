function getTicketPrice(age){
    let price
    if(age<=12) price = 10
    else if(age>12 && age <= 59) price = 20
    else price = 15
    console.log(`Ticket price is $${price}`)
}
getTicketPrice(10)
getTicketPrice(15)
getTicketPrice(65)