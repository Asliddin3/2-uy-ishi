


const user =[

]

for( i = 0 ; i<10 ; i++){
   var a = []
   user[i] = a
   user[i].foydalanuvchi = i + 1
   user[i].name = prompt("Ismingizni kiriting." ,"Name")
   user[i].yosh = +prompt("Yoshingizni kiriting.", "35")
   while( isNaN(user[i].yosh) || user[i].yosh == 0){
      user[i].yosh = +prompt("Yoshingizni sonda kiriting.")
   }
   a++
}
// console.log(user);
for( const key in user){
   console.log( "Foydalanuvchi " + user[key].foydalanuvchi );
   console.log("Sizning ismingiz " + user[key].name);
   console.log("Sizning yoshingiz " +user[key].yosh);
}
