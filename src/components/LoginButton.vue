<template>
  <div>
    <button class="login-button" v-on:click="login()">
      Login
    </button>
  </div>
</template>

<script>
import Moralis from "@/initMoralis";
import store from "@/store";
import RecordListABI from "@/contractsABI/RecordListABI";

export default {
  methods: {
    login() {
      Moralis.Web3.authenticate().then((user)=> {
        store.commit('setEthAddress', user.get('ethAddress'));
        store.commit('setAccount', user);
        this.getPlayerRecordFromContract(user.get('ethAddress'));
      });
    },
    getPlayerRecordFromContract(ethAccount) {
      const options = {
        contractAddress: "0x6aeaC2C3A99b93de6357620a0c1fE15cbDC7Ef26",
        functionName: "getRecord",
        abi: RecordListABI,
        params: {
          _address : ethAccount
        }
      };

      Moralis.Web3.enableWeb3().then(() => {
        Moralis.Web3.executeFunction(options).then((res) => {
          if (res) {
            store.commit('setPlayerRecord', res);
          }
        });
      })
    }

  },
}
</script>

<style scoped>
.login-button {
  padding:5px;
  margin-bottom: 50px;
}

.login-button {
  background-image: linear-gradient(-180deg, #37AEE2 0%, #1ec846 100%);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.login-button:hover {
  background-image: linear-gradient(-180deg, #1dc9a1 0%, #17759C 100%);
}

@media (min-width: 768px) {
  .login-button {
    padding: 1rem 2rem;
  }
}
</style>