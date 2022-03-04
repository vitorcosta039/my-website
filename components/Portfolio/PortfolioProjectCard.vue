<template>
  <a
    v-wave
    class="
      project
      bg-white
      dark:bg-black-2
      cursor-pointer
      items-center
      flex flex-col
      mb-4
      overflow-hidden
      relative
      rounded
    "
    :href="link"
    target="_blank"
  >
    <picture class="flex w-full items-center justify-center px-8 relative">
      <slot name="image"></slot>
    </picture>
    <div class="project__content px-2 pt-16 pb-2">
      <slot name="title"></slot>
      <slot name="description"></slot>
      <p
        class="
          bg-white
          font-semibold
          inline-flex
          px-1
          rounded-sm
          shadow-sm
          text-success text-xs
        "
      >
        e-commerce
      </p>
    </div>
    <slot name="category"></slot>
  </a>
</template>

<script>
export default {
  name: 'PortfolioProjectCard',
  props: {
    link: {
      type: String,
      default: '#'
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  border: 1px solid $primary;
  transition: all 300ms;

  picture {
    background: $primary;
    padding-top: 56.25%;
    img {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: calc(100% - 48px);
    }
  }

  &__content {
    bottom: -100%;
    position: absolute;
    transition: all 400ms;
    width: 100%;

    &::before {
      content: '';
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.65) 33%,
        rgba(0, 0, 0, 0) 100%
      );
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 0;
    }
  }

  &:hover {
    border: 1px solid #fff;
    .project__content {
      bottom: 0%;
      color: #fff;
      p {
        z-index: 9;
        position: relative;
      }
    }
  }

  &__category {
    right: 6px;
    top: 6px;
  }
}
</style>
