const rendaMensalEmCentavos = 300_000; //renda mensal do aluno, em centavos.
const mesesDecorridos = 12; // Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const totalJaPagoPeloAluno = 1_760_000; // Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.

//Limites
const rendaLimite = 200_000; //o aluno deve ter renda acima desse limite (em centavos)
const valorCurso = 1_800_000;  // valor total do curso em centavos
const limiteMeses = 60; //limite de meses para o pagamento. Se for maior que 60 meses, o aluno não deve mais nada.

//Parcela
let parcelaEmReais = 0;
let valorRestanteEmReais = ((valorCurso - totalJaPagoPeloAluno)/100);
//CONDIÇÃO PARA PAGAR
if ((rendaMensalEmCentavos>rendaLimite)&&(mesesDecorridos<=limiteMeses)&&(totalJaPagoPeloAluno<valorCurso)){
    parcelaEmReais =(0.18*rendaMensalEmCentavos)/100; 
    if (parcelaEmReais > valorRestanteEmReais){ 
        parcelaEmReais = valorRestanteEmReais;
    };
    
//CONDIÇÕES PARA NÂO PAGAR
}else{
    if (totalJaPagoPeloAluno>=1_800_000){  //Se o valor total do curso já foi quitado, não precisamos analisar outra condição
        console.log(`A dívida de R$ ${(valorCurso/100).toFixed(2)} foi quitada dentro de 60 meses e nenhum valor é devido.`);
    }else if (mesesDecorridos>60){  //Se o prazo de 60 meses já passou, não precisamos analisar as outra condição
        console.log(`Nenhum valor é devido, pois se passaram ${mesesDecorridos} meses. A dívida não existe mais.`);       
    }else{ //Por fim, caso, as condições anteriores não forem satisfeitas, significa que a renda não está acima de R$2000,00.
        console.log(`A parcela desse mês é nula, pois a renda não é maior que R$ ${(rendaLimite/100).toFixed(2)}`);
    }
}
console.log(
    `
    Valor da parcela desse mês: R$ ${parcelaEmReais.toFixed(2)} 
    Meses decorridos:  ${mesesDecorridos}
    Valor restante a pagar: R$ ${valorRestanteEmReais.toFixed(2)}
    Total já pago: R$ ${(totalJaPagoPeloAluno/100).toFixed(2)}
    `
);
