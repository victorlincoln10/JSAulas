var agora = new Date()
var hora = agora.getHours()
var dia = agora.getDate()
 

console.log(`hoje é dia ${dia} Agora sao exatamente ${hora}`)
if (hora < 12 ){
    console.log ("Bom dia")
} else if(hora >=18){
    console.log("Boa noite")
} else {
    console.log("Boa tarde")
}