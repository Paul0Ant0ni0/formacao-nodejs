const devArea = {
    version: "01ab", 
    production: false
};

const client = {
    device: "web"
};

// Exportação default quando possui só um dado para exportação, podendo só atribuir o valor, sem as {}
// module.exports =  devArea;

module.exports = {
    devArea,
    client
};