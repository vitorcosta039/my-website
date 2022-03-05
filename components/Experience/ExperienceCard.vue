<template>
  <div
    class="
      card
      bg-white
      dark:bg-black-2
      border-gray-200
      dark:border-black
      flex flex-col
      lg:flex-row
      items-start
      px-5
      py-7
      lg:px-6 lg:py-10
      relative
      shadow-sm
    "
    :class="classPosition"
    data-scroll-anim="fadeInTop20"
  >
    <div class="card__left flex items-start mb-4 lg:mb-0 mr-9">
      <picture
        class="
          border-gray-400
          dark:border-black
          flex
          items-center
          justify-center
          mr-2
          overflow-hidden
          rounded-full
        "
        data-scroll-anim-d="fadeInTop20"
        data-scroll-anim-delay="500"
      >
        <img
          :src="require(`@/assets/images/companies/${data.img}`)"
          :alt="data.company"
          :title="data.company"
        />
      </picture>
      <div class="flex flex-col">
        <p
          class="font-semibold text-gray-600 dark:text-gray-400"
          data-scroll-anim-d="fadeInTop20"
          data-scroll-anim-delay="300"
        >
          {{ data.company }}
        </p>
        <small
          data-scroll-anim-d="fadeInTop20"
          data-scroll-anim-delay="400"
          class="text-sm text-gray-500 dark:text-gray-600"
          >{{ data.period }}</small
        >
      </div>
    </div>

    <div class="card__right">
      <h3
        class="font-bold mb-1 lg:mb-2 text-black dark:text-white"
        data-scroll-anim-d="fadeInTop20"
        data-scroll-anim-delay="200"
      >
        {{ data.occupation }}
      </h3>
      <ul
        v-if="data.functions.length !== 0"
        class="text-gray-600 dark:text-gray-400"
      >
        <li
          v-for="(fnc, index) in data.functions"
          :key="index"
          class="text-xs lg:text-sm"
          data-scroll-anim-d="fadeInTop20"
          data-scroll-anim-delay="200"
        >
          {{ fnc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    classPosition: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  $radius: 4px;
  &.card--top {
    border-radius: $radius $radius 0 0;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  &.card--middle {
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  &.card--bottom {
    border-radius: 0 0 $radius $radius;
  }

  &__left {
    width: 100%;
    picture {
      border-width: 1px;
      border-style: solid;
      height: 40px;
      width: 40px;
    }
  }

  &__right {
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .card {
    &__left {
      width: 300px;
      min-width: 300px;
      picture {
        height: 48px;
        width: 48px;
      }
    }
  }
}
</style>
