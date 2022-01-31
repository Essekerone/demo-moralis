<template>
  <div class="sword-box">
    <div v-if="item.hashAccepted" class="accept-icon" :title="item.hash" />
    <div v-if="item.equipped" class="equipped-mark">EQUIPPED</div>
    <item-link :name="item.name" :token-address="item.token_address" :token-id="item.token_id" />
    <p> Amount - {{ item.amount }} </p>
    <img style="width:100px; height: 100px" :src="item.image"/>
    <div v-if="item.attributes">
      <item-attributes :attributes="item.attributes" />
    </div>
    <button v-if="item.equipped" v-on:click="unequipItem()">
      Unequip
    </button>
    <button v-else v-on:click="useItem()">
      Use
    </button>
  </div>
</template>
<script>
import ItemDefault from '@/components/Items/ItemDefault'
import ItemsTypeEnum from "@/classes/enums/ItemsTypeEnum";
import Item from "@/classes/Sword/Item";
import ItemLink from "@/components/Items/itemLink";

export default {
  components: {ItemLink},
  mixins: [ItemDefault],
  props: {
    pickedSword: {
      type: Item
    },
    shieldPicked: {
      type: Item
    },
    helmPicked: {
      type: Item
    },
    bootsPicked: {
      type: Item
    }
  },
  methods: {
    useItem(): void {
      const item = JSON.stringify(this.item);
      this.saveItem(item);
      this.account.save();
      this.$emit('useItem');
    },
    unequipItem(): void {
      this.saveItem(null);
      this.account.save();
      this.$emit('useItem');
    },
    saveItem(item: Item|null): void {
      if (this.item.type) {
        if(this.item.type === ItemsTypeEnum.shield) {
          this.account.set("shieldPicked", item)
        } else if(this.item.type === ItemsTypeEnum.helm) {
          this.account.set("helmPicked", item)
        } else if(this.item.type === ItemsTypeEnum.boots) {
          this.account.set("bootsPicked", item)
        }
      } else {
        this.account.set("swordPicked", item)
      }
    }
  },
  mounted() {
    if (this.item.type) {
      if(this.item.type === ItemsTypeEnum.shield) {
        this.item.isEquipped(this.shieldPicked.token_address, this.shieldPicked.token_id);
      } else if(this.item.type === ItemsTypeEnum.helm) {
        this.item.isEquipped(this.helmPicked.token_address, this.helmPicked.token_id);
      } else if(this.item.type === ItemsTypeEnum.boots) {
        this.item.isEquipped(this.bootsPicked.token_address, this.bootsPicked.token_id);
      }
    } else {
      this.item.isEquipped(this.pickedSword.token_address, this.pickedSword.token_id);
    }
  },
}
</script>

<style scoped>
.equipped-mark {
  position: absolute;
  top: 5px;
  right: 5px;
  color: gold;
  font-weight: bold;
}
</style>