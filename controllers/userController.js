
const newUser = (req, res) =>{
    try {
        console.log("adding a new user")
    } catch (error) {
        console.log(error)
    }
}

const getUser = (req, res) =>{
    try {
        console.log("getting all users")
    } catch (error) {
        console.log(error)
    }
}

const getUserById = (req, res) =>{
    try {
        const {id} = req.params
        console.log(`getting a user by ${id}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getUser, newUser, getUserById}
