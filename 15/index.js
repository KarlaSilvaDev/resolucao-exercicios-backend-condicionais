const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "Bros";

if (primeiroNome){ //resultará em false se primeiroNome = ""
    if (apelido){ //resultará false se apelido = ""
        console.log(apelido);
    }else if (sobrenome){ 
        console.log(primeiroNome+" "+sobrenome);
    }else{
        console.log(primeiroNome);
    }  
}else{
    console.log("O preenchimento do primeiro nome é obrigatório.");
}