<template>
  <div class="about">
    <h1>This is about that project</h1>
    <p>That is NFT game</p>
    <p>Here you can fight with bots and save your own record to blockchain record list</p>
    <p>Later will be add multiplayer and duel mode</p>
    <p>Buy Items in shop and make new records</p>
    <img>
  </div>
</template>

<script>
import {mapState} from "vuex";

// const DAI_ADDRESS = "0xEf88257955607E51A329b52d7441e3f46c73df29"
// // const web3 = new Moralis.Web3('HTTP://127.0.0.1:7545');
// const web3 = new Web3('https://rinkeby.arbitrum.io/rpc');
// // const web3 = new Web3('HTTP://127.0.0.1:7545');
//
//
// const swordAddress = "0xf4407b85a4082a167872881d3DF92E887be2B914";
// const tradeAddress = "0x24E207C65D51280150752D0F42c6F53C1B98dA98";
// // const tradeToken = new web3.eth.Contract(SwordTraderABI, tradeAddress, {gasPrice: '12345678', from: fromAddress});
// const tradeToken = new web3.eth.Contract(SwordTraderABI, tradeAddress);
// const swordToken = new web3.eth.Contract(SwordContractABI, "0xD3ab5d80dfc0Dd4627dc90993598D1A86d9E1C85");
//
//
// console.log(Moralis[0])
// const options = {
//   contractAddress: tradeAddress,
//   functionName: "addListingERC1155",
//   abi: SwordTraderABI,
//   params: {
//     price: 1000,
//     contractAddr: swordAddress,
//     tokenId: 1,
//   },
//   msgValue: Moralis.Units.ETH("0.1")
// };
//
// const options2 = {
//   contractAddress: tradeAddress,
//   functionName: "purchaseERC1155",
//   abi: SwordTraderABI,
//   params: {
//     amount: 1,
//     contractAddr: swordAddress,
//     tokenId: 0,
//   },
//   msgValue: Moralis.Units.ETH("0.1")
// };

// const optionsTokenURI = {
//   contractAddress: "0xD3ab5d80dfc0Dd4627dc90993598D1A86d9E1C85",
//   functionName: "tokenURI",
//   abi: SwordContractABI,
//   params: {
//     tokenId: 1,
//   }
// };
// Moralis.enableWeb3().then(()=>{
//   let result =  Moralis.executeFunction(optionsTokenURI).then((res) => {
//     console.log(res);
//     console.log(result);
//   });
// })
// const createBuyOrder = async () => {
//   let res = await Moralis.executeFunction(optionsTokenURI);
//   return res;
// };
//
// const test = async () => {
//   return await Moralis.executeFunction(optionsTokenURI);
// };
//
// console.log(createBuyOrder());
// const swordToken2 = new web3.eth.Contract(SwordContractERC1155ABI, "0x80ed9767EC2bA7d75c9F1B37D078878e88112113");
//
// swordToken.methods.tokenURI(0).call(function (err, res) {
//   if (err) {
//     console.log("An error occured", err)
//     return
//   }
//   console.log("The balance is: ", res)
// })
//
// swordToken2.methods.name().call(function (err, res) {
//   if (err) {
//     console.log("An error occured", err)
//     return
//   }
//   console.log("The balance is: ", res)}
// )
// const options2 = {
//   contractAddress: tradeAddress,
//   functionName: "purchaseERC1155",
//   abi: SwordTraderABI,
//   params: {
//     amount: 1,
//     contractAddr: swordAddress,
//     tokenId: 1,
//   },
//   msgValue: Moralis.Units.ETH("0.1")
// };
// let result = Moralis.executeFunction(options2);

// console.log(result);

// const web32 = Moralis.enableWeb3().then((user)=> {
//   const web3 = Moralis.enableWeb3().then(()=>{
//     console.log(web3);
//     const contract = new web3.eth.Contract(contractAbi, contractAddress);
//
//   });
//
//   // let tet = Moralis.executeFunction(optionsTokenURI);
//   // console.log(tet);
// })
// tradeToken.methods.purchaseERC1155(swordAddress,0,1).send({from : '0x1a1e8B44128b637ed6a2B8C0FDeA030A12667A3C', value: 100000000, gas: 300000},function (err, res) {
//   if (err) {
//     console.log("An error occured", err)
//     return
//   }
//   console.log("The balance is: ", res)
// })

export default {
  computed: mapState([
    'ethAddress',
    'account'
  ])
}
</script>