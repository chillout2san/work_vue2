<template>
  <p>{{ this.$store.state.count }}</p>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('increment', 2);
    }
  }
};
</script>
