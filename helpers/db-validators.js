const Role = require('../models/role')
const { response, request } = require('express');
const User = require('../models/user');



const isRoleValid = async (role = '') => {
    const roleExist = await Role.findOne({ role })
    if (!roleExist) {
        throw new Error(`The role ${role} is not registered in the Database`)
    }
};

const emailExist = async (email = '') => {

    //Verificar si el correo existe
    const emailExist = await User.findOne({ email });
    if (emailExist) {
        throw new Error(`The email: '${email}' is already registered`)
    }
}

const userExistById = async ( id ) => {

    //Verificar si el correo existe
    const userExist = await User.findById( id );
    if ( !userExist ) {
        throw new Error(`there is no user with that id`)
    }
}


module.exports = {
    isRoleValid,
    emailExist,
    userExistById,
}