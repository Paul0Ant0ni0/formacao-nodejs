const { frases } =  require("../frases/frases");
const readline = require('readline-sync');


function random() {
    return Math.floor(Math.random() * frases.length);
    
}

function frasesRandom() {
    return frases[random()]
}

 function menu() {    
    let resposta;
    do {
       
        console.log(`Frase do dia: ${frasesRandom()}`);
        resposta = leitura()
        console.log("--------- FRASE MOTIVACIONAL -------------")
      
    } while (resposta == 1);
    console.log("Programa finalizado com sucesso!!!");
    
}

function leitura(){
    console.log("\nDigite 0 -> Cancelar;");
    console.log("Digite 1 -> Continuar; \n");
    return readline.question("\nDeseja continuar ? \n");

}

exports.init = menu;