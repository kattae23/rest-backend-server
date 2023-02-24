const jwt = require('jsonwebtoken');

const public_key = process.env.SECRETORPRIVATEKEY;


const createJWT = async (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid }

        jwt.sign(payload, public_key, {
            expiresIn: '30h'
        }, (err, token) => {
            
            if (err) {
                console.log(error);
                reject('Token could not be generated');
            } else {
                resolve( token );
            }
        })


    })

}


module.exports = {
    createJWT
}