require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind hole hover kiwi bridge ghost'; 
let testAccounts = [
"0x0460c3bd48332f9c2e2c45ceeba9119d8837b9d9c02cdcc232605a741e24ede8",
"0xee27e46253d28109a699acd33fba31e8b7cfa4ca669b39f09b77c4d8f0419295",
"0xf9ea7096b713857952254fdd9cf84acb3d2c707e9f72fc45aa56f78fb13d1aa0",
"0x73d4b2ef8cd77b3c9c38b870155717fbe85c6960d8d953d75f7c630518d1c213",
"0xd18a1b2ddeb0937027bcc579af34e3ef10425e194a1dbff446a5e82c9fce228f",
"0xe5500f08a4d8044bcd1d34f4c89fa858cac96b962e682d8883d4be74d78a5eaa",
"0x79bf817148f766a1c334110af4408c33c522c6c599fd960a801e58d9def760dc",
"0x16919841418f22faf4998813d3f69f386faa6146f5af27d9d101715efef8608d",
"0x2523adf8c2c73e117e1407e18219841cda1d60fd2228234fbbc2f592e6fc993c",
"0x0f5b0f4475b5d74e1032476efe88add596ccba930900d75ffafab567e40ea355"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


