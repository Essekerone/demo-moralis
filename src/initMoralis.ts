import store from './store'
import Moralis from 'moralis';

const serverUrl = "https://0xsms6usbl4k.usemoralis.com:2053/server";
const appId = "G4OJYCw2Bo03Sw73nQw4TTBzgobKdFV0zgDOorjM";

Moralis.start({ serverUrl, appId });

const web3 = new Moralis.Web3();
store.commit('setWeb3', web3);
if(!store.state.ethAddress){

}

export default Moralis;