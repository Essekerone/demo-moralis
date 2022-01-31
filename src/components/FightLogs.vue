<template>
  <div class="log-box">
    <div v-for="(message, round) in messages" :key="message"  class="message-action">
      <div class="rounds-name">Round {{messages.length - round}} </div>
      <div v-for="mes in message" :key="mes">
        <p v-html="mes.message"
           :class="{
          'bad-hit' : mes.isEnemy && mes.result,
          'good-block': mes.isEnemy && !mes.result,
          'good-hit': !mes.isEnemy && mes.result,
          'bad-block': !mes.isEnemy && !mes.result,
          }"
        >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array
    },
    size: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>
.log-box {
  margin: 0 5px;
}
.message-action {
  margin: 15px auto;
  text-align: center;
  font-family: cursive;
  font-weight: 500;
  font-size: 18px;
  border: 7px solid;
  border-image-slice: 1;
  padding: 2rem 1rem;
  min-height: 3em;
  resize: both;
  border-image-source: linear-gradient(to left, #743ad5, #2f292f);
  background: rgb(4,51,51);
  background: radial-gradient(circle, rgba(4,51,51,0.2) 0%, rgba(2,0,36,0.1) 0%, rgba(23,240,174,0.1) 24%, rgba(102,103,171,0.5) 75%);
}
.bad-hit {
  color: red;
}
.good-block {
  color: #5f9ae7;
}
.good-hit {
  color: #42b983;
}
.bad-block {
  color: brown;
}
.rounds-name {
  font-size: 20px;
  font-weight: bolder;
}
</style>