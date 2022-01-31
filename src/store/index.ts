import { createStore } from 'vuex'

export default createStore({
  state: {
    ethAddress: '',
    account: {},
    playerRecord: 0,
    web3: Object
  },
  mutations: {
    setEthAddress(state : any, ethAddress : string) : void {
      state.ethAddress = ethAddress;
    },
    setAccount(state : any, account : object) : void {
      state.account = account;
    },
    setPlayerRecord(state : any, record : number) : void {
      state.playerRecord = record;
    },
    setWeb3(state : any, web3 : object) : void {
      state.web3 = web3;
    },
  },
  actions: {
  },
  modules: {
  }
})
