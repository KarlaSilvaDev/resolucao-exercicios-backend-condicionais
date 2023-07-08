const ladoA =5;
const ladoB = 5;
//seu código aqui
console.log(`Lado A: ${ladoA} \nLado B: ${ladoB} \nEssa pedra é uma bucha?`);
//if ((ladoA <= 6) && (ladoA >= 0) && (ladoB <= 6) && (ladoB >= 0)){
const valores = [0,1,2,3,4,5,6];
if ((valores.includes(ladoA))&&(valores.includes(ladoB))){
    if (ladoA == ladoB){
        if (ladoA == 0){  //APENAS O LADOA FOI TESTADO PORQUE LADOA == LADOB
            console.log('Bucha de Branco');
        }else if (ladoA == 1){
            console.log('Bucha de Ás');
        }else if (ladoA == 2){
            console.log('Bucha de Duque');
        }else if (ladoA == 3){
            console.log('Bucha de Terno');
        }else if (ladoA == 4){
            console.log('Bucha de Quadra');
        }else if (ladoA == 5){
            console.log('Bucha de Quina');
        }else{
            console.log('Bucha de Sena')
        }
    }else{
        console.log('Não é bucha.');
    }
}else{ 
    if (!(valores.includes(ladoA))){
        console.log('Valor inválido para o lado A.');
    }
    if (!(valores.includes(ladoB))){
        console.log('Valor inválido para o lado B.');
    }
    console.log('O valor inserido deve ser um número no intervalo [0,6]');
}

