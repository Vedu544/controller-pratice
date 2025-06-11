

const newProduct = (req, res) =>{
    try {
        console.log("adding a new product")
    } catch (error) {
        console.log(error)
    }
}

const getProduct = (req, res) =>{
    try {
        console.log("getting a new product")
    } catch (error) {
        console.log(error)
    }
}

const getProductById = (req, res) =>{
    try {
        const {id} = req.params
        console.log(`getting a new product by ${id}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {newProduct, getProduct, getProductById}