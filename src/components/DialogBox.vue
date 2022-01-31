<template>
  <div class="dialog" v-if="show" @click.stop="toggle()">
    <div @click.stop class="dialog__box">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  },
  name: "DialogBox"
}
</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__box {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>