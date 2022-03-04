<template>
  <label
    :class="isCheck ? 'active' : ''"
    class="checkbox cursor-pointer flex items-center font-semibold text-sm"
    :for="`check-${id}`"
    @click="toggleFilter"
  >
    <input :id="`check-${id}`" v-model="isCheck" type="checkbox" />
    <span class="flex mr-2 rounded relative">
      <OutlineCheckIcon class="absolute text-white" width="16" />
    </span>
    <p>
      <slot name="title"></slot>
    </p>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCheck: false
    };
  },
  methods: {
    toggleFilter({ target }) {
      if (target.tagName === 'INPUT') {
        this.$emit('toggle-filter', { isCheck: !this.isCheck, id: this.id });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox {
  color: $gray-500;
  span {
    border: 2px solid $primary;
    height: 20px;
    transition: all 300ms;
    width: 20px;

    svg {
      left: 50%;
      opacity: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 300ms;
    }
  }

  p {
    transition: all 300ms;
  }

  input {
    opacity: 0;
    position: absolute;
    visibility: hidden;
    z-index: -1;
    &:checked ~ span {
      background: $primary;

      svg {
        opacity: 1;
      }
    }

    &:checked ~ p {
      color: $primary;
    }
  }
}
</style>
