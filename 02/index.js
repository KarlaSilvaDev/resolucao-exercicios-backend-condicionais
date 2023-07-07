const jogada1 = 7;
const jogada2 = 2;

//seu código aqui
console.log(`Jogada 1: ${jogada1} \nJogada 2: ${jogada2}`);
if (isNaN(jogada1) && isNaN(jogada2)){  //VALIDAÇÃO
    console.log('Jogadas 1 e 2 não são números. Jogadas inválidas!');
}else if (isNaN(jogada1)){
    console.log('Jogada 1 não é um número. Jogada inválida!');
}else if (isNaN(jogada2)){
    console.log('Jogada 2 não é um número. Jogada inválida!');
} else {  //SE PASSAR NA VALIDAÇÃO
    let soma = parseInt(jogada1) + parseInt(jogada2);
    console.log(`Soma: ${soma}`);
    console.log((soma % 2 == 0) ? 'Resultado: PAR!' : 'Resultado: ÍMPAR!');
}


