<template>
  <div v-if="renderComponent">
    <div v-if="itemsListType === 1">
      <ItemsBox :inventory="inventory"/>
    </div>
    <transition-group tag="ul" name="items-list">
      <li v-for="(item, index) in items" :key="index">
        <PlayerItem v-if="itemsListType === 1"
                    :item="item"
                    @useItem="reloadUsedItem()"
                    :picked-sword="swordPicked"
                    :shield-picked="shieldPicked"
                    :boots-picked="bootsPicked"
                    :helm-picked="helmPicked"
        />
        <ShopItem v-else
            :item="item"
            @purchase="reload()"
            :shop-id="index"
        />
      </li>
    </transition-group>
    <div v-intersection class="observer"></div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {mapState} from "vuex";
import ItemsBox from "@/components/ItemsBox";
import InventoryService from "@/classes/services/InventoryService";
import Item from "@/classes/Sword/Item";
import {useNftItems} from "@/classes/hooks/useNftItems";
import {useInventory} from "@/classes/hooks/useInventory";
import PlayerItem from "@/components/Items/PlayerItem";
import ShopItem from "@/components/Items/ShopItem";

export default defineComponent({
  name: 'ItemsList',
  components: {ShopItem, PlayerItem, ItemsBox},
  props: {
    optionsForNft: {
      type: Object,
      default: {}
    },
    itemsListType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      //@todo items array of Item
      items: [],
      renderComponent: true,
      swordPicked: new Item(),
      shieldPicked: new Item(),
      helmPicked: new Item(),
      bootsPicked: new Item(),
      inventory: {}
    }
  },
  methods: {
    init(): void {
      if (Object.keys(this.account).length !== 0) {
        const swordObject = InventoryService.getItemFromDataBase(this.account, 'swordPicked');
        const shieldObject = InventoryService.getItemFromDataBase(this.account, 'shieldPicked');
        const helmObject = InventoryService.getItemFromDataBase(this.account, 'helmPicked');
        const bootsObject = InventoryService.getItemFromDataBase(this.account, 'bootsPicked');
        if (Object.keys(swordObject).length) {
          this.swordPicked = swordObject;
        }
        if (Object.keys(shieldObject).length) {
          this.shieldPicked = shieldObject;
        }
        if (Object.keys(helmObject).length) {
          this.helmPicked = helmObject;
        }
        if (Object.keys(bootsObject).length) {
          this.bootsPicked = bootsObject;
        }
      }
    },
    reloadUsedItem(): void {
      this.renderComponent = false;
      const sword = InventoryService.getItemFromDataBase(this.account, 'swordPicked');
      if (Object.keys(sword).length) {
        this.swordPicked = sword;
        this.inventory.sword = this.swordPicked;
      } else {
        this.swordPicked = new Item();
        this.inventory.sword = {
          image: "sword_default.png",
          name: "sword_default"
        };
      }
      const shield = InventoryService.getItemFromDataBase(this.account, 'shieldPicked');
      if (Object.keys(shield).length) {
        this.shieldPicked = shield;
        this.inventory.shield = this.shieldPicked;
      } else {
        this.shieldPicked = new Item();
        this.inventory.shield = {
          image: "shield_default.png",
          name: "shield_default"
        };
      }
      const helm = InventoryService.getItemFromDataBase(this.account, 'helmPicked');
      if (Object.keys(helm).length) {
        this.helmPicked = helm;
        this.inventory.helm = helm;
      } else {
        this.helmPicked = new Item();
        this.inventory.helm = {
          image: "helmet_default.png",
          name: "helm_default"
        };
      }
      const boots = InventoryService.getItemFromDataBase(this.account, 'bootsPicked');
      if (Object.keys(boots).length) {
        this.bootsPicked = boots;
        this.inventory.boots = boots;
      } else {
        this.bootsPicked = new Item();
        this.inventory.boots = {
          image: "boots_default.png",
          name: "boots_default"
        };
      }
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
  mounted() {
    this.init();
  },
  setup(props) {
    let items = useNftItems(props.optionsForNft);

    function reload(): void {
      this.renderComponent = false;
      items = useNftItems(this.optionsForNft);
      this.init();
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    }

    if (props.itemsListType === 1) {
      const inventory = useInventory(true);
      return {
        inventory,
        items
      }
    }

    return {
      items,
      reload: reload
    }
  },
  computed: mapState([
    'account'
  ])
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.items-list-complete-item {
  transition: all 0.4s;
  display: inline-block;
  margin-right: 10px;
}

.items-list-complete-enter, .items-list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.items-list-complete-leave-active {
  position: absolute;
  transition: all 0.4s;
}

.items-list-move {
  transition: trnsform 0.8s ease;
}
</style>
