function calculateTotal(billAmount, taxPercentage=20){
    const taxAmount = (billAmount * taxPercentage)/ 100
    const totalBill = billAmount + taxAmount
    return totalBill
}
console.log(calculateTotal(200,10))
console.log(calculateTotal(200))