<template>
  <div class="items-box">
    <div class="item-box" v-for="item in inventory">
      <Popper class="dark" :offsetDistance="'5'">
          <img v-if="!item.token_address" class="item-image" :src="feedItemIcon(item.image)"/>
          <img v-else class="item-image" :src="item.image"/>
        <template #content="{ close }">
          <div class="popper-content">
            <item-link v-if="item.token_address" :name="item.name" :token-id="item.token_id" :token-address="item.token_address" />
            <p v-else> {{ item.name }} </p>
            <item-attributes :attributes="item.attributes" />
          </div>
        </template>
      </Popper>
    </div>
  </div>
</template>

<script>
import ItemAttributes from "@/components/ItemAttributes";
import ItemLink from "@/components/Items/itemLink";

export default {
  name: "ItemsBox",
  components: {ItemLink, ItemAttributes},
  props: {
    isDefault: {
      type: Boolean,
      default: false
    },
    inventory: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      numberItems: 4,
    }
  },
  methods: {
    feedItemIcon(image: string) {
      return require(`../assets/${image}`);
    },
  },
  mounted() {
    // console.log(this.inventory)
  },

  watch: {
    items: {
      handler(deepWatch) {
        // console.log(deepWatch);
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.items-box {
  max-width: 160px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 4px outset rgb(102, 103, 171);
  margin: auto;
  cursor: pointer;
}

.item-image {
  border: 4px outset rgb(102, 103, 171);
  max-width: 60px;
  max-height: 60px;
  object-fit: fill;
  height:100%;
  width:100%;
  box-shadow: 8px 8px 24px 0 rgb(173, 173, 170);
}

.item-box {
  flex: 1 1 40%;
  padding: 5px;
}


.dark {
  --popper-theme-background-color: rgb(102, 103, 171);
  --popper-theme-background-color-hover: rgba(102, 103, 171,0.95);
  --popper-theme-text-color: white;
  --popper-theme-border-width: 5px;
  --popper-theme-border-radius: 6px;
  --popper-theme-border-color: #87bbb5;
  --popper-theme-border-style: solid;
  --popper-theme-padding: 20px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(87, 46, 46, 0.25);
}

.popper-content {
  /*text-align: left;*/
}


</style>