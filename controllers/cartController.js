

const getCart = (req, res) =>{
    try {
        const {id} = req.params
        console.log(`getting cart by userid ${id}}`)
    } catch (error) {
        console.log(error)
    }
}


const addProduct = (req, res) =>{
    try {
        const {id} = req.params
        console.log(`adding a new product into cart for ${id}`)
    } catch (error) {}
        console.log(error)
    }


module.exports = {addProduct, getCart}
