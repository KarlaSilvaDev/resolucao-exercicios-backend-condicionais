//valor do produto comprado 
const valorDoProduto = 100000; //em centavos

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago 
const valorPago = 300;  //em reais

if (valorPago < valorDoProduto/100){
    let parcelaEmReais = ((valorDoProduto/100)/quantidadeDoParcelamento).toFixed(2);
    let parcelasRestantes = quantidadeDoParcelamento - (valorPago/parcelaEmReais);
    if (parcelasRestantes == 1){
        console.log(`Resta ${parcelasRestantes} parcela de R$ ${parcelaEmReais}.`);
    }else{
        console.log(`Restam ${parcelasRestantes} parcelas de R$ ${parcelaEmReais}.`);
    }
}else{
    console.log("O produto já está pago.");
}
