<template>
  <ItemsList :items-list-type="itemListType" :options-for-nft="options" />
</template>
<script>

import {defineComponent} from "vue";
import ItemsList from "@/components/Items/ItemsList";
import SwordShopOptions from "@/config/SwordShopOptions";
import ItemsListEnum from "@/classes/enums/ItemsListEnum";
export default defineComponent({
  name: 'SwordsShop',
  data() {
    return {
      options: SwordShopOptions,
      itemListType: ItemsListEnum.SHOP
    }
  },
  components: {ItemsList},
})
</script>

<style scoped>

</style>
