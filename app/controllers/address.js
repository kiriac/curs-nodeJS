'use strict'
const Address = require('../models/address');

function getAddressById(req, res, next) {

    Address
        .find()
        .populate('user', 'name email')
        .exec(function (err, result) {
            if (err) {
                return next(err);
            }

            return res.json({ data: result });
        })
}

function getAddress(req, res, next) {
    Address
        .find()
        .exec(function (err, result) {
            if (err) {
                next(err);
            }

            req.resources.address = result;
            return next();
        })
}

function saveAddress(req, res, next) {
    //const address = new Address({ street: 'aviatorilor', zipCode: '650', city: 'Cluj', user: '5ebc28de1ec039810474b8f1' });
    const address = new Address({ street: req.body.street, zipCode: req.body.email, city: req.body.year, user: req.body.user });

    address.save(function (err, response) {
        if (err) {
            return next({ err: err });
        }

        return res.json({ data: response });
    })
}

module.exports = {
    getOneAddress: getAddressById,
    saveAddress: saveAddress,
    getAddress: getAddress
}
