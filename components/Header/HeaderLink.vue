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
    @click="scrollToIdOnClick($event, link)"
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
  },
  methods: {
    scrollToIdOnClick(event) {
      event.preventDefault();
      this.$emit('toggle-menu', false);
      const to = this.getScrollTopByHref(event.target) - 100;
      this.scrollToPosition(to);
    },
    scrollToPosition(to) {
      this.smoothScrollTo(0, to, 600);
    },
    getScrollTopByHref(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    },
    smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      duration = typeof duration !== 'undefined' ? duration : 400;

      // Easing function
      const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60); // 60 fps
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
