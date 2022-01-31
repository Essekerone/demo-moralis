<template>
  <div class="player-box">
    <div class="player-panel__top">
      <h1>Your</h1>
      <progress-bar :value="player.health" :max-value="player.maxHealth"></progress-bar>
      <progress-bar :value="player.experience" :max-value="player.maxExperience" :name="'experience'" :height="10" :color="'BlueViolet'"></progress-bar>
    </div>
    <div class="player-panel__middle">
      <div class="player-panel__section">
        <items-box :inventory="inventory" />
      </div>
      <div class="player-panel__center player-panel__section">
        <img class="player-image" src="@/assets/default_person_ico.png">
      </div>
      <div class="player-panel__right player-panel__section">
         <StatsPanel :person="player" />
      </div>
    </div>
    <div class="player-panel__bottom">
      <ActionBox :player="player"/>
      <spell-box
        :spells-owner="player"
        />
    </div>
  </div>
</template>
<script>
import DefaultPerson from "@/classes/DefaultPerson";
import ActionBox from "@/components/ActionBox";
import ProgressBar from "@/components/ProgressBar";
import ItemsBox from "@/components/ItemsBox";
import {useInventory} from "@/classes/hooks/useInventory";
import SpellBox from "@/components/Spells/SpellsBox";

export default {
  name: "PlayerBox",
  components: {SpellBox, ItemsBox, ProgressBar, ActionBox},
  props: {
    player: DefaultPerson,
  },
  data() {
    return {
      inventory: {}
    }
  },
  watch: {
    inventory: {
      handler() {
        this.player.setInventory(this.inventory);
      },
      deep: true
    }
  },
  setup(props) {
    // const store = useStore();
    // const account = computed(() => store.state.account);
    const inventory = useInventory(true);
    // props.player.setInventory(inventory);

    return {
      inventory
    }
  },
}
</script>

<style scoped>
.player-image {
  width:150px;
  height:150px;
}
.player-panel__middle {
  display:flex;
  align-items: center;
}
.player-panel__section {
  /*width: 33%;*/
}
</style>