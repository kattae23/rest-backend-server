const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usersPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controller',
        id
    });
}

const usersPost = (req, res) => {

    const {firstName, lastName} = req.body;


    res.status(201).json({
        ok: true,
        msg: 'post API - controller',
        firstName,
        lastName
    });
}

const usersDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API - controller'
    });
}

const usersPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API - controller'
    });
}



module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
};