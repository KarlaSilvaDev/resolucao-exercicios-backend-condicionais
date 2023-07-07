const jogada1 = "tesoura";
const jogada2 = "pedra";

console.log(`Jogador 1: ${jogada1} \nJogador 2: ${jogada2}`);
if (jogada1 == "pedra" || jogada1 == "papel" || jogada1 == "tesoura"){  //VALIDAÇÃO JOGADA1
    if (jogada2 == "pedra" || jogada2 == "papel" || jogada2 == "tesoura"){ //VALIDAÇÃO JOGADA2
        if (jogada1 == jogada2){  //CASOS DE EMPATE
            console.log("Resultado: EMPATE!");  
        }else if (jogada1 == "pedra"){    //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO PEDRA 
            if (jogada2 == "papel"){   
                console.log("Resultado: JOGADOR 2 VENCEU!");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = TESOURA
                console.log("Resultado: JOGADOR 1 VENCEU!");
            }  
        }else if (jogada1 == "papel"){   //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO PAPEL
            if (jogada2 == "pedra"){    
                console.log("Resultado: JOGADOR 1 VENCEU!");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = TESOURA
                console.log("Resultado: JOGADOR 2 VENCEU!");
            }  
        }else if (jogada1 == "tesoura"){ //COMBINAÇÕES COM JOGADOR 1 ESCOLHENDO TESOURA
            if (jogada2 == "papel"){    
                console.log("Resultado: JOGADOR 1 VENCEU!");
            }else{   //COMO NÃO DEU EMPATE, JOGADOR 2 = PEDRA
                console.log("Resultado: JOGADOR 2 VENCEU!");
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