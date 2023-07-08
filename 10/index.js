const caractere = "E";

if (caractere.length == 1){
    if (/[aeiou]/.test(caractere)){
        console.log("Vogal minúscula");
    }else if (/[AEIOU]/.test(caractere)){
        console.log("Vogal maiúscula");
    }else if (/[a-z]/.test(caractere) || /[A-Z]/.test(caractere)){
        console.log("Consoante");
    }else if (/[0123956789]/.test(caractere)){
        console.log("É um número");
    }else{
        console.log("Não é um número ou letra.");
    }
}else{
    console.log("Entrada inválida. O programa avalia apenas UM caractere");
}