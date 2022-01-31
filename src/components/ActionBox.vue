<template>
  <div class="actions-box">
    <div class="attack-box">
      <div>Attack</div>
      <div v-for="action in player.activeActions" :key="action">
        <input
            @change="changeAction($event.target.value)"
            type="radio"
            :id="'attack-' + action.value"
            :value="action.value"
            name="player-action"
        >
        <label :for="'attack-' + action.value">{{ action.name }}</label>
      </div>
    </div>
    <div class="defence-box">
      <div>Block</div>
      <div v-for="action in player.activeActions" :key="action">
        <input
            @change="player.block = $event.target.value"
            type="radio"
            :id="'block-' + action.value"
            :value="action.value"
            name="player-block"
        >
        <label :for="'block-' + action.value">{{ action.name }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ActionBox',
  props: {
    player: {}
  },
  methods: {
    changeAction(value: number) : void {
      this.player.attack = value;
      this.player.activeSpell = null;
    }
  }
}
</script>
<style scoped>
.actions-box {
  margin-top: 10px;
  justify-content: center;
  display: flex;
}
</style>