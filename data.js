module.exports = () => {
    const data = {
        products: []
    }
    // for generate random data
    // to use more realistic random data generator libraries we can use
    // faker(https://fakerjs.dev), casual[https://www.npmjs.com/package/casual], chance.js[https://chancejs.com/]
    for( let i=0; i<100; i++){
        data.products.push({
            id: i,
            title: `product ${i}`
        })
    }

    return data;
}