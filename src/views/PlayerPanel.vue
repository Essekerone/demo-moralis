<template>
  <div v-if="ethAddress">
    <input :value="name" placeholder="Set your name" class="name-input" @change="changeName($event.target.value)" type="text">
    <ItemsList :items-list-type="itemListType" :options-for-nft="options" />
  </div>

  <div v-else-if="!ethAddress">
    <LoginButton/>
  </div>

  <div>

  </div>
</template>

<script>
import {mapState} from "vuex";
import LoginButton from "@/components/LoginButton.vue"
import ItemsList from "@/components/Items/ItemsList";
import ItemsListEnum from "@/classes/enums/ItemsListEnum";

export default {
  name: "PlayerPanel",
  data() {
    return {
      options:  {
        chain: "rinkeby",
        // address: "0x84df0e23226b595da18cb3582bfd5c491c580144",
        address:this.ethAddress,
      },
      itemListType: ItemsListEnum.PLAYER,
      name: null
    }
  },
  components: {
    ItemsList,
    LoginButton,
  },
  methods: {
    changeName(value: string): void {
      if(value){
        this.account.set('name', value);
      }
    }
  },
  mounted() {
    if (this.ethAddress) {
      this.name = this.account.get('name');
    }
  },
  computed: mapState([
    'ethAddress',
    'account'
  ]),
}
</script>

<style scoped>
.name-input{

}
</style>