const obj = cartObj()

total =""
totalPrice = 0
delivery = 9000
totalInfo = ""
for( const key in obj){
    totalInfo = totalInfo + key + " " + obj[key].info + "," 
    totalPrice = totalPrice + obj[key].price 
}
totalPrice = totalPrice + delivery

console.log( `Sizning buyurmangiz ${totalInfo} umumiy narx  ${totalPrice} yetkazib berish hizmati ${delivery}`  );