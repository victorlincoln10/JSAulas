let num =[5,2,1,3,4];//tamanho 10
let valores = [8, 1, 7, 4, 2, 9]
num.sort()//ordena em ordem crescente
for(let posicao=0;posicao<= num.length;posicao++){
    console.log(num[posicao])    
}
for(let pos=0; pos < valores.length;pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

