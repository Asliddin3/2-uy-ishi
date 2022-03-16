a = prompt("Isminigzni kiting.")
b = +prompt("Tugilgan yilingizni kiriting.")
while( isNaN(b) || b == 0 ){
    b = +prompt("Tugilgan yilingizni sonda kiriting.")
}
c = +prompt("Hozigi yilni kiriting.")
while( isNaN(c) || c == 0){
    c = +prompt("Hozigi yilni sonda kiting kiriting.")
}
function yosh(a , b , c){
     console.log( a + ", yoshingiz "  + (c - b));
}
console.log(yosh(a, b , c));

var misol = +prompt("Yechmokchi bolgan misolarni sonlarini kiriting.")
while( isNaN(misol) || misol == 0){
    misol = +prompt("Hozigi yilni sonda kiting kiriting.")
}

for( i = 0 ; i < misol ; i++){
    var birinchi = Math.floor(Math.random() * 10 + 1 )
    var ikkinchi = Math.floor(Math.random() * 10 + 1 )
    var hisob = Math.floor(Math.random()*(5 - 1) + 1)
    if( hisob == 1 ){
        var gen = +prompt( birinchi + " + " + ikkinchi + " = ?" )
        var javob = birinchi + ikkinchi
    }else if( hisob == 2){
        var gen = +prompt( birinchi + " - " + ikkinchi + " = ?" )
        var javob = birinchi - ikkinchi
    }else if( hisob == 3){
        var gen = +prompt( birinchi + " * " + ikkinchi + " = ?" )
        var javob = birinchi * ikkinchi
    }else{
        var gen = +prompt( birinchi + " / " + ikkinchi + " = ?" )
        var javob = birinchi / ikkinchi
    }
    if( javob == gen ){
        console.log("Sizning javob togri " + gen);
    }else{
        console.log( "Sizning javob notogri " + gen + " Togri javob " + javob);
    }
}
