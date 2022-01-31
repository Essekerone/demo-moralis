<template>
  <div class="spells-box">
    <spell v-for="(spell,key) in userSpells"
         :spell="spell"
           @setSpell="setActiveSpell"
    />
  </div>
</template>

<script>
import DefaultPerson from "@/classes/DefaultPerson";
import Spell from "@/components/Spells/Spell";
import SpellInterface from "@/classes/spells/SpellInterface";
import {ActionsListEnum} from "@/classes/enums/ActionsListEnum";

export default {
  components: {Spell},
  props: {
    spellsOwner: {type: DefaultPerson}
  },
  methods: {
    setActiveSpell(spell: SpellInterface): void {
      this.spellsOwner.activeSpell = spell;
      this.spellsOwner.attack = ActionsListEnum.NONE;
    }
  },
  data() {
    return {
      renderComponent: true,
      userSpells: this.spellsOwner.spells,
    }
  }
}

</script>

<style scoped>
.spells-box {
  margin-top: 10px;
  justify-content: center;
  height: 50px;
  display: flex;
}


</style>