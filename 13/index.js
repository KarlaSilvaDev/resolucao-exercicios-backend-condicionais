//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento ="creito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinalEmReais = 0; 
let desconto = 0;

if (tipoDePagamento == "credito" || tipoDePagamento == "cheque" || tipoDePagamento == "debito" || tipoDePagamento == "dinheiro"){
    if (tipoDePagamento == "credito"){
        desconto = 0.05; //5%
    }else if (tipoDePagamento == "cheque"){
        desconto = 0.03; //3%
    }else if ((tipoDePagamento == "debito")||(tipoDePagamento == "dinheiro")){
        desconto = 0.10; //10%
    }
    valorFinalEmReais = (valorDoProduto*(1-desconto)/100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorFinalEmReais}`); 
}else{
    console.log("Tipo de pagamento inválido!");
}

