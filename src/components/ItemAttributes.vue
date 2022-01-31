<template>
  <div v-for="attribute in attributes">
    <p> {{ attribute.trait_type }} : {{ attribute.value }} </p>
  </div>
</template>

<script>
import Attribute from "@/classes/Sword/Attribute";

export default {
  props: {
    attributes: {
      type: Array[Attribute],
      default: () => []
    }
  },
  name: "ItemAttributes"
}
</script>

<style scoped>
p {
  text-align: left;
}
</style>