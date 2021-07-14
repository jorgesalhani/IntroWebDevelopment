'use strict';

const storeRepository = require("../repositories/store-repository");

exports.get = (req, res, next) => {
    const id = req.params.id;
    let response = storeRepository.findOneBy(id)
    response.then(function(result) {
        res.status(200).send(JSON.stringify(result))
    })
}

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    const data = {
        id: id,
        person: req.body
    }
    storeRepository.writeToRepository(data)

    res.status(200).send(data);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    storeRepository.deleteFromRepositoryBy(id)
    res.status(200).send(req.body);
};