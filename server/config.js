module.exports.BASE_URL = "http://127.0.0.1:80/";
module.exports.ETHEREUM_NODE_ADDRESS = "https://rinkeby.infura.io/v3/2c5d4a79b76b40cf8c1e0d540e295870"
//module.exports.ABI = [{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getDauthPublicKey","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"},{"name":"verification_type","type":"string"}],"name":"getUserVerificationCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"},{"name":"verification_type","type":"string"},{"name":"index","type":"uint256"}],"name":"getUserVerifierByIndex","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"},{"name":"verification_type","type":"string"},{"name":"index","type":"uint256"}],"name":"getUserVerifiedValueByIndex","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getEncryptedData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"encryptedData","type":"string"}],"name":"setEncryptedData","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getDauthUrl","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"string"},{"name":"verification_type","type":"string"},{"name":"verification_value","type":"string"}],"name":"putUserVerification","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user_address","type":"address"}],"name":"getUsername","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"string"},{"name":"dauth_url","type":"string"},{"name":"public_key","type":"string"}],"name":"set","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"killDauth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"username","type":"string"},{"name":"verification_type","type":"string"},{"name":"verification_value","type":"string"},{"name":"index","type":"uint256"}],"name":"putUserVerification","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"username","type":"string"},{"indexed":false,"name":"success","type":"bool"}],"name":"NewUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"username","type":"string"},{"indexed":false,"name":"verificationType","type":"string"},{"indexed":false,"name":"success","type":"bool"}],"name":"NewVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"username","type":"string"},{"indexed":false,"name":"success","type":"bool"}],"name":"UserDataUpdate","type":"event"}]
module.exports.CONTRACT_ADDRESS = "0x0b78050f847a35c076359da636cd124f596838d4";
module.exports.ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "killDauth",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "success",
				"type": "bool"
			}
		],
		"name": "NewUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "verificationType",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "success",
				"type": "bool"
			}
		],
		"name": "NewVerification",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "verification_type",
				"type": "string"
			},
			{
				"name": "verification_value",
				"type": "string"
			}
		],
		"name": "putUserVerification",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "verification_type",
				"type": "string"
			},
			{
				"name": "verification_value",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "putUserVerification",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "dauth_url",
				"type": "string"
			},
			{
				"name": "public_key",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "encryptedData",
				"type": "string"
			}
		],
		"name": "setEncryptedData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "username",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "success",
				"type": "bool"
			}
		],
		"name": "UserDataUpdate",
		"type": "event"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			}
		],
		"name": "getDauthPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			}
		],
		"name": "getDauthUrl",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			}
		],
		"name": "getEncryptedData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "getUsername",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "verification_type",
				"type": "string"
			}
		],
		"name": "getUserVerificationCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "verification_type",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserVerifiedValueByIndex",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "verification_type",
				"type": "string"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserVerifierByIndex",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
