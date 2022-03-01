<template>
  <main class="home">
    <Hero />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </main>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.setAnimation();
  },

  methods: {
    setAnimation() {
      this.$anime({
        targets: '.title',
        opacity: [0, 1],
        duration: 10000
      });
    }
  }
};
</script>

<style>
</style>
