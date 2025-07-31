// Solicitando o conteudo de outro arquivo
// Desistruturação
const { getFullName, productType} = require("./services/products");

const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {

    console.log("Carrinho de compras");

    getFullName("1", "teclado");
    products.getFullName("1", "teclado");

    console.log(productType);

    // products.getFullName("408", "mousepad");
    // products.getFullName("508", "mouse");
    // products.getProductlabel("mousepad");

    // products.productType.version;
    // console.log(config.client);

    database.connectToDatabase("my-data");

    
    
}

main();