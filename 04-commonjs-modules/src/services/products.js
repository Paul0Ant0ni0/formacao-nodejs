// todas as funcções que lidam com produto
// todo arquivo do js é um módulo

const productType = {
    version: "digital",
    tax: "x1"
}

//hidden const
const apiURL = {
    url: "www.google.com/api"
}

async function getFullName(codeId, productName) {
    await doBreakline();
    console.log(`product: ${codeId} -- ${productName}`);
}

//Função só acessível para o arquivo
//hidden function / Função escondida
async function doBreakline() {
    console.log("\n");
}

async function getProductlabel(productName) {
    console.log(`product: ${productName}`)
    
}


// exportando 
module.exports = {
    getFullName,
    getProductlabel,
    productType
};