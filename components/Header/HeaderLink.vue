<template>
  <a
    :href="link"
    class="
      header-link
      duration-200
      ease-in
      flex
      lg:mx-4
      py-3
      lg:py-1.5
      relative
      text-white
      lg:text-gray-500
      lg:hover:text-gray-600
      lg:dark:text-gray-400
      lg:dark:hover:text-white
    "
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'HeaderLink',
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .header-link {
    &::after {
      background: $gray-400;
      border-radius: 2px;
      bottom: 2px;
      content: '';
      height: 2px;
      position: absolute;
      transition: all 300ms;
      width: 0;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
