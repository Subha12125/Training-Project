const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to the home page from auth controller.");
    }
    catch (error) {
        console.log(error);

    }
}
const register = async (req, res) => {
    try {
        res
            .status(200)
            .send("Welcome to the register page from auth controller.");
    }
    catch (error) {
        console.log(error);

    }
}
module.exports = { home, register };