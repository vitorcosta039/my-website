<template>
  <a
    v-wave
    class="
      duration-200
      ease-in
      flex
      lg:hover:bg-primary
      p-3
      lg:p-2
      rounded-full
      text-white
    "
    :href="link"
    target="_black"
    :title="title"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'HeaderSocialLink',
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
