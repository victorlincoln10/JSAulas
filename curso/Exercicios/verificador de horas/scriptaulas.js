function carregar(){
    let msg = document.getElementById('msg')
    var img = document.getElementById('img') 
    var data = new Date()
    //var hora = 21
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >=0 && hora <12){
        //Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora>= 12 && hora <= 18){
        //Boa tarde
        img.src ='tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{  
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}