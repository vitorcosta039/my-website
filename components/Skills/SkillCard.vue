<template>
  <div
    class="
      skill-card
      flex
      items-center
      bg-white
      dark:bg-black-2
      p-1
      relative
      rounded
      shadow-sm
    "
    :style="style"
  >
    <picture class="flex items-center justify-center rounded-full">
      <slot name="image"></slot>
    </picture>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    hovercolor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      style: {
        '--hovercolor': this.hovercolor
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.skill-card {
  border: 1px solid transparent;
  transition: all 300ms;
  picture {
    height: 28px;
    transition: all 300ms;
    width: 28px;

    img {
      width: 16px;
    }
  }

  &:hover {
    background: var(--hovercolor);
    border: 1px solid #FFF;
    picture {
      background: #fff;
    }
  }
}
</style>
