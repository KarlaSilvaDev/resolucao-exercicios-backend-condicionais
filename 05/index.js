const alturaEmCm = 180;

//seu código aqui
if (isNaN(alturaEmCm)){
    console.log("Altura inválida!");
}else{
    if (alturaEmCm>=180){
        console.log("APROVADO");
    }else{
        console.log("REPROVADO");
    }   
}