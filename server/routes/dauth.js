var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');
var cryptico = require('cryptico');
var config = require("../config");
var BASE_URL = config.BASE_URL;
var crypto = require('crypto');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/2c5d4a79b76b40cf8c1e0d540e295870"));
var contract = web3.eth.contract(config.ABI).at(config.CONTRACT_ADDRESS);

router.get("/:id",function(req, res, next){
    var username = req.query.username;
    var id = req.params.id;
    var url = BASE_URL+"dauth/"+id;
	console.log(id);
	console.log(username)
    UserModel.User.findOne({username:username}, function(error, user){
	console.log(error);
	console.log("Fuck you");
	if(error || !user){
		console.log("entered error");
	    res.render('dauth',{username:undefined});
	    return;
	}
	console.log("Still safe");
	console.log(user);
	contract.getDauthUrl(username, function(error, response){
		console.log("waiting for web3 response");
	    console.log("Response: "+response);
	    console.log("Error: "+error);
	    if(response == url){
			console.log("OK -> username is defined");
			res.render('dauth', {username:user.username});
		}
	    else {
			console.log("NO -> username is undefined");
			res.render('dauth',{username:undefined});
		}
	})
    });
});

router.post("/:id", function(req, res, next){
    var username = req.body.username;
    var code = req.body.code;
    var hashcode = req.body.hashcode;
    var cipher = req.body.cipher;
    UserModel.User.findOne({username:username}, function(error, user){
	if(error||!user){
	    res.status(500).send("");
	    console.log(error);
	    return;
	}
	var expectedHashcode = crypto.createHash('sha256').update(code+user.password).digest('hex');
	if(expectedHashcode != hashcode){
	    res.status(403).send("");
	    return;
	}
	var rsaKey = user.privateKey;
        var priv = new cryptico.RSAKey();
	var priv = cryptico.RSAKey.parse(rsaKey);
	var decrypted = cryptico.decrypt(cipher, priv);
	if(decrypted.status == "success"){
		console.log(decrypted.plaintext);
	    res.send(decrypted.plaintext);
	    return;
	}
	res.status(403).send("");
    });
});

module.exports = router;
