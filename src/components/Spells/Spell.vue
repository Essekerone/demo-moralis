<template>
  <div>
    <label>
      <input @change="setSpell()"  class="action-radio" type="radio" name="player-action" value="small" :disabled="spell.currentCooldown > 0" >
      <img :alt="spell.description" :title="spell.description" class="spell-box__spell-icon"
           :class="{
          'cooldown' : spell.currentCooldown
          }"
           :src="feedItemIcon(spell.icon)">
      <div class="cooldown-counter">CD: {{ spell.currentCooldown }}</div>
    </label>
  </div>
</template>

<script>
import SpellDefault from "@/classes/spells/SpellDefault";

export default {
  props: {
    spell: {
      type: SpellDefault,
    },
  },
  methods: {
    feedItemIcon(image: string) {
      return require(`../../assets/skills/${image}`);
    },
    setSpell() {
      this.$emit('setSpell', this.spell);
    }
  }
}
</script>

<style scoped>
.spell-box__spell-icon {
  width: 50px;
  height: 50px;
  filter: blur(0.85px);
  cursor: pointer;
  margin: 0 3px;

  /*width: 19%;*/
}

.spell-box__spell-icon:hover {
  filter: blur(0px);
  box-shadow: 0 0 10px 10px rgb(102, 103, 171);
  border-radius: 50%;
}
[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  filter: blur(0px);
  box-shadow: 0 0 10px 10px rgb(102, 103, 171);
  border-radius: 50%;
}

.cooldown:hover {
  box-shadow: 0 0 10px 10px rgb(196, 36, 36);
}
</style>