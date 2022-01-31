<template>
  <div class="wrapper" :style="[{
    width: width + 'px',
    height: height + 'px'
  }]">
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="[{
        width: value / (maxValue / 100) + '%',
        background: color,
        height: height + 'px'
      }]"
      >
        <div
            class="progress-bar-label"
            :style="[{
              width: width + 'px',
            }]"
            :title="{ name , value , maxValue }">
          {{ name }} {{ value }} / {{ maxValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 100
    },
    maxValue: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: 'red'
    },
    name: {
      type: String,
      default: 'Health'
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 20
    }
  },
  name: "ProgressBar"
}
</script>

<style scoped>
.wrapper {
  width: 200px;
  margin: 10px auto;
}

.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  padding: 3px;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
}

.progress-bar-fill {
  display: block;
  max-width: 100%;
  border-radius: 3px;
  position:relative;
  background-color: #659cef;
  transition: width 500ms ease-in-out;
}
.progress-bar-label {
  position: absolute;
  top: 50%;
  transform: translate(0, -50% );
}
</style>