<template>
  <div>
    <div class="enemy-box">
      <h1>{{ bot.name }}</h1>
      <progress-bar :value="bot.health" :max-value="bot.maxHealth"></progress-bar>
      <div class="enemy-box__middle">
         <items-box :inventory="inventory" />
        <img class="enemy-image" src="@/assets/bot_level_1_ico.png">
        <StatsPanel :person="bot"/>
      </div>
      <div class="attack-box"> Attack : {{ bot.getActionNameById(bot.attack) }}</div>
      <div class="block-box"> Block :{{ bot.getActionNameById(bot.block) }}</div>
    </div>
  </div>
</template>

<script>
import DefaultPerson from "../classes/DefaultPerson";
import ProgressBar from "@/components/ProgressBar";
import ItemsBox from "@/components/ItemsBox";
import {useInventory} from "@/classes/hooks/useInventory";

export default {
  components: {ItemsBox, ProgressBar},
  props: {
    bot: DefaultPerson
  },
  setup(props) {
    const inventory = useInventory(false);
    return {
      inventory
    }
  },
}
</script>

<style scoped>
.enemy-image {
  width:150px;
  height:150px;
  /*transform: rotateY(180deg);*/
}
.enemy-box__middle {
  display:flex;
  align-items: center;
}
</style>