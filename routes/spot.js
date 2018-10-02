var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Spot = require('../models/Spot.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL SPOTS */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    console.log("Express route");
    var token = getToken(req.headers);
    if(token) {
        Spot.find(function(err, products) {
            if(err) return next(err);
            res.json(products);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }    
});

/* SAVE SPOT */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if(token) {
    Spot.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

/* UPDATE SPOT */
router.put('/:id', passport.authenticate('jwt', {session: false}), function(req, res) {
    var token = getToken(req.headers);
    if(token){
        Spot.findByIdAndUpdate(req.params.id, req.body, (err, updatedSpot) => {
            if(err) {
                return next(err);
            } 
            res.json(updatedSpot);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized'});
    }
});

/* DELETE SPOT */
router.delete('/:id', passport.authenticate('jwt', {session: false}), function(req, res){
    var token = getToken(req.headers);
    if(token) {
        Spot.findByIdAndRemove(req.params.id, (err, deleted) => {
            if(err) {
                return next(err);
            }
            res.json(deleted);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized'});
    }
});

getToken = function(headers) {
    if(headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if(parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

module.exports = router;