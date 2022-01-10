function carregar(){
    var msg1 = document.getElementById('msg')
    var img1 = document.getElementById('img')
    var data = new Date()
    var hora = 21
    //var hora = data.getHours()
    msg1.innerHTML = `Agora sao ${hora} horas`
    if (hora >=0 && hora <12){
        //Bom dia!
        img1.src = 'manha.jpg'
    }else if(hora>= 12 && hora <= 18){
        //Boa tarde
        img1.src ='tarde.jpg'
    }else{  
        img1.src = 'noite.jpg'
    }
}