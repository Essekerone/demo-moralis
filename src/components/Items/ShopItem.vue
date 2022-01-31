<template>
  <div class="sword-box">
    <div v-if="item.hashAccepted" class="accept-icon" :title="item.hash" />
    <item-link :name="item.name" :token-address="item.token_address" :token-id="item.token_id" />
    <p> Amount - {{ pricesContent.amount }} </p>
    <img style="width:100px; height: 100px" :src="item.image"/>
    <p>{{ pricesContent.priceETH }}<img class="eth-box__ico" src="@/assets/eth-ico.png"></p>
    <p> {{item.description }}</p>
    <div v-if="item.attributes">
      <item-attributes :attributes="item.attributes" />
    </div>
    <button @click="buyItem()">
      Buy
    </button>
  </div>
</template>

<script>
import ItemDefault from '@/components/Items/ItemDefault'
import Moralis from "@/initMoralis";
import SwordTraderABI from "@/contractsABI/SwordTraderABI";
import {usePrices} from "@/classes/hooks/usePrices";
import ItemLink from "@/components/Items/itemLink";

export default {
  components: {ItemLink},
  mixins: [ItemDefault],
  props: {
    shopId: {
      type: Number,
      default: 0
    },
  },
  setup(props) {
    const pricesContent = usePrices(props.item.token_address, props.item.token_id);
    return {
      pricesContent
    }
  },
  methods: {
    buyItem() {
      const options2 = {
        contractAddress: this.pricesContent.traderContractAddress,
        functionName: "purchaseERC1155",
        abi: SwordTraderABI,
        params: {
          amount: 1,
          contractAddr: this.item.token_address,
          tokenId: this.item.token_id,
        },
        msgValue: this.pricesContent.priceWei
      };
      Moralis.enableWeb3().then(() => {
        Moralis.executeFunction(options2).then((res) => {
          console.log(res.status);
          if (res.status === true) {
            this.$emit('purchase');
            console.log("aeae SUCCESS");
          }
        });
      })
    },
  }
}
</script>

<style scoped>

</style>