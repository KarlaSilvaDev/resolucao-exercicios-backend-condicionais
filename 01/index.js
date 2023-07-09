const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 == "pedra" || jogada1 == "papel" || jogada1 == "tesoura"){  //VALIDAÇÃO JOGADA1
    if (jogada2 == "pedra" || jogada2 == "papel" || jogada2 == "tesoura"){ //VALIDAÇÃO JOGADA2
        if (jogada1 == jogada2){  //CASOS DE EMPATE
            console.log("empate");  
        }else if (jogada1 == "pedra") {    //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO PEDRA 
            if (jogada2 == "papel"){   
                console.log("papel");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = TESOURA
                console.log("pedra");
            }  
        }else if (jogada1 == "papel"){   //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO PAPEL
            if (jogada2 == "pedra"){    
                console.log("papel");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = TESOURA
                console.log("tesoura");
            }  
        }else if (jogada1 == "tesoura"){ //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO TESOURA
            if (jogada2 == "papel"){    
                console.log("tesoura");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = PEDRA
                console.log("pedra");       
            }  
        }
    }else{
        console.log("Jogada 2 inválida!");
    }
} else {
    if (jogada2 != "pedra" && jogada2 != "papel" && jogada2 != "tesoura"){ //Validação da jogada 2
        console.log("Jogada 1 e Jogada 2 inválidas!");
    }else{
        console.log("Jogada 1 inválida!");
    }
}