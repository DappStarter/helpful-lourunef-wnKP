require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth random upgrade include problem off sniff'; 
let testAccounts = [
"0xaabb37e7c43d962a89e3d3facfa2c093f1abd687b1aba3fa1f88c68ae7caac92",
"0x79ea6fbe64444560d9c69546d892a11ca6ef795b071a3790bff070c56427b9a2",
"0xe3ff8fe714d6e246b97a51f6cd1e3ed06efafd35057c6f47e42de6a3e07214a1",
"0x50bdf87318fd2645569cf5dc01455816613e30baa651d6290b94f65be4885643",
"0x03fc69e80b88da21a88cafee0dff3997bec1f39056513a17018d5b6301079997",
"0x9defa7448d47d0c03d68addff78bf25c01fefa5924d11697b7413daeded68084",
"0x9b53a175e4e2a56d83f8428e1303010c034f1250dc2ea27341c959afdc52aa77",
"0x1f091a43a76c6d5c6085c2b8be0239738a64009f8b4172e9cb7096fddce336ac",
"0x2c7eda4707c3e2399fc9f40bd39611e9f2c266cf759a71213c1554fb53f70f77",
"0x264e73a2c7fcfd70c45caf1096a30b32c171a17da2a817d6120a8abd6b622045"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

