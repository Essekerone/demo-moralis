<template>
  <div>
    <div>
      Level: {{ person.level }}
    </div>
    <div>
      Damage: {{ person.damage }}
    </div>
    <div>
      Head Defense: {{ person.headDefense }}
    </div>
    <div>
      Chest Defense: {{ person.chestDefense }}
    </div>
    <div>
      Legs Defense: {{ person.legsDefense }}
    </div>
  </div>
</template>

<script>
import DefaultPerson from "@/classes/DefaultPerson";
import {defineComponent} from "vue";
export default defineComponent({
  name: "StatsPanel",
  props : {
    person: {
      type: DefaultPerson
    }
  }
})
</script>

<style scoped>

</style>