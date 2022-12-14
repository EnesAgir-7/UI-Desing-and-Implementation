<template>
  <button @click="onClick()" v-bind:style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    text: String,
    eventName: String,
  },
  methods: {
    onClick() {
      this.$emit(this.eventName);
    },
  },
};
</script>
