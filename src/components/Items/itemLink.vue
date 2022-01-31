<template>
  <p>
    <a v-if="tokenAddress" target="_blank" :href="`https://testnets.opensea.io/assets/${tokenAddress}/${tokenId}`">
      {{ name }} - {{ tokenId }}
    </a>
  </p>
</template>

<script>
export default {
  props:{
    tokenAddress: {
      type: String,
      default: ''
    },
    tokenId: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },
  name: "itemLink"
}
</script>

<style scoped>
a {
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  color: teal;
}

.popper-content a:hover {
  color:white;
}
</style>