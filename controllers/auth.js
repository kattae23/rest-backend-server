const { request, response } = require("express");
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { createJWT } = require("../helpers/create-jwt");


const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {

        // verificar si el email existe
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'That email does not exist'
            })
        }

        // Si el usuario está activo
        if (user.state === false ) {
            return res.status(400).json({
                msg: 'Your account has been block'
            })
        }
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'The password is incorrect'
            })
        }

        // Generar el JSON WEB TOKEN JWT
        const token = await createJWT( user.id );

        res.json({
            user,
            token            
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Something goes wrong talk with the administrator'
        })
    }




}


module.exports = {
    login
}