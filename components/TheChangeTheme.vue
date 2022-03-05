<template>
  <label class="theme" :for="id" :title="id" @click="handleChangeTheme">
    <input :id="id" v-model="isThemeDark" type="checkbox" />
    <span class="duration-300 flex relative rounded-full">
      <OutlineSunIcon class="duration-300" width="14" />
      <OutlineMoonIcon class="duration-300" width="14" />
    </span>
  </label>
</template>

<script>
export default {
  name: 'ChangeTheme',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isThemeDark: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (this.$colorMode.preference === 'system') {
        const isDarkSystem =
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkSystem) {
          this.isThemeDark = true;
        }
      }

      if (this.$colorMode.preference === 'dark') {
        this.isThemeDark = true;
      }
    }, 200);
  },
  methods: {
    handleChangeTheme({ target }) {
      if (target.tagName === 'INPUT') {
        if (this.isThemeDark) {
          this.$colorMode.preference = 'light';
          this.isThemeDark = false;
        } else {
          this.$colorMode.preference = 'dark';
          this.isThemeDark = true;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.theme {
  span {
    background: $gray-200;
    cursor: pointer;
    height: 24px;
    width: 44px;

    &:after {
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      content: '';
      height: 20px;
      left: 2px;
      position: absolute;
      top: 2px;
      transition: all 300ms;
      width: 20px;
    }

    svg {
      position: absolute;
      top: 5px;
      z-index: 1;
      &:nth-child(1) {
        color: #ef8e38;
        left: 5px;
        opacity: 1;
        transform: translateX();
      }

      &:nth-child(2) {
        color: $gray-600;
        right: 5px;
        opacity: 0;
        transform: translateX(-20px);
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;

    &:checked ~ {
      span {
        background: $primary;
        &:after {
          transform: translateX(20px);
        }

        svg {
          &:nth-child(1) {
            opacity: 0;
            transform: translateX(20px);
          }

          &:nth-child(2) {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
}

/* .dark {
  .theme {
    span {
      background: red;
    }
  }
} */
</style>
