<template>
  <a
    v-wave
    class="
      about-card
      bg-white
      dark:bg-gray-300
      duration-300
      flex
      items-center
      p-4
      rounded-md
      shadow-sm
      text-black
      transition-all
    "
    :href="link"
    target="_blank"
  >
    <slot name="icon"></slot>

    <span class="duration-300 flex font-semibold ml-2 transition-all">{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: 'AboutMeCard',
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.about-card {
  max-width: 56px;
  img {
    min-width: 24px;
  }

  span {
    max-width: 0;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    max-width: 999px;
    span {
      max-width: 999px;
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
