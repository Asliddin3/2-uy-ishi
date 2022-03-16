var a = +prompt("Qoylarni sonini kiriting.")
while( isNaN(a) || a == 0){
    a = +prompt("Qoylarni sonini hato kiritingiz, tog'irlang.")
}
var qoy = ""
for( i = 1 ; i <= a ; i++){
    if( i == 1){
        qoy = i + " qoy... "
    }
    else{
        qoy += i + " qo'ylar... " 
    }
    
} 
console.log(qoy);

var a = +prompt('Kvadratni yonini sonini kiriting.')
while( isNaN(a) || a == 0){
    a = +prompt('Kvadratni yonini sonini hato kiritiz boshqatang kiriting.')
}
if( a % 2 == 0){
    a++
}
let total = " "
for(let i = 0; i < a; i++){
    for(let j = 0; j < a; j++){
        if( (i == 0 || i+1 == a)  && ( j < a ) || ( j == 0 || j+1 == a ) && ( i < a) || ( i == j) || i + j+1 == a  ){
            total += " * "
        }else{
            total += " # "
        }
       
    }
    console.log(total);
    total = " "
}