<template>
  <section class="experience mt-10 lg:mt-20">
    <div class="container flex flex-col lg:flex-row items-start">
      <h2
        class="
          font-semibold
          mb-4
          lg:mb-8
          text-2xl
          lg:text-3xl
          text-black-2
          dark:text-white
        "
        data-scroll-anim="fadeInTop20"
      >
        {{ $t('experience.title') }}
      </h2>

      <div class="experience__right">
        <ExperienceCard
          v-for="(card, index) in dataCardExperience"
          :key="index"
          :data="card"
          :class-position="checkClassByPositionCard(index)"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      dataCardExperience: []
    };
  },
  created() {
    this.dataCardExperience =
      this.$i18n.messages[this.$i18n.locale].experience.jobs;
  },
  methods: {
    checkClassByPositionCard(index) {
      if (index === 0) {
        return 'card--top';
      } else if (index === this.dataCardExperience.length - 1) {
        return 'card--bottom';
      }

      return 'card--middle';
    }
  }
};
</script>

<style lang="scss" scoped>
.experience {
  h2 {
    max-width: 300px;
  }

  &__right {
    /* width: calc(100% - 300px); */
    width: 100%;
  }
}
</style>
