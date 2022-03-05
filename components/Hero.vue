<template>
  <section class="hero container flex items-center justify-between">
    <div class="hero__left flex flex-col justify-center w-full sm:w-auto">
      <div class="hero__title mb-6 relative">
        <h1
          class="
            font-semibold
            relative
            text-2xl
            lg:text-3xl
            text-black-2
            dark:text-white
          "
        >
          <span v-anime="{ ...fadeInTop20, duration: 600 }" class="flex pl-6">
            {{ $t('hero.presentation[0]') }}
            <br />
          </span>
          <span
            v-anime="{ ...fadeInTop20, delay: 200, duration: 600 }"
            class="flex pl-6"
          >
            {{ $t('hero.presentation[1]') }}
            <br />
          </span>
          <span
            v-anime="{ ...fadeInTop20, delay: 400, duration: 600 }"
            class="flex pl-6"
          >
            {{ $t('hero.presentation[2]') }}
          </span>
        </h1>

        <p
          class="
            absolute
            font-semibold
            tracking-tighter
            text-gray-300
            dark:text-gray-600
            opacity-50
            text-5xl
            lg:text-7xl
          "
        >
          <span
            v-anime="{ ...fadeIn, delay: 200, duration: 600 }"
            class="inline-flex whitespace-nowrap"
          >
            {{ $t('hero.welcome[0]') }}
          </span>
          <br />
          <span
            v-anime="{ ...fadeIn, delay: 400, duration: 600 }"
            class="inline-flex whitespace-nowrap"
          >
            {{ $t('hero.welcome[1]') }}
          </span>
        </p>
      </div>

      <a
        v-anime="{ ...fadeInTop20, delay: 600, duration: 600 }"
        v-wave
        class="
          btn btn-blue
          font-semibold
          mb-12
          lg:mb-4
          px-4
          py-2
          text-sm
          w-full
          sm:w-auto
        "
        href="mailto:vitorcostacontato588@gmail.com"
      >
        {{ $t('hero.contact') }}
        <OutlineArrowRightIcon class="ml-2" width="20" />
      </a>

      <div
        v-anime="{ ...fadeInTop20, delay: 600, duration: 800 }"
        class="
          moveY10Infinite
          flex
          items-center
          justify-center
          h-12
          mx-auto
          text-primary
          dark:text-white
          w-12
          rounded-full
        "
      >
        <OutlineChevronDownIcon width="24" />
      </div>
    </div>

    <div
      class="
        hero__right
        hidden
        lg:flex lg:items-center lg:flex-col lg:justify-center
        px-8
        py-24
      "
    >
      <div class="hero__right-content px-8">
        <picture
          v-anime="{ ...fadeIn, duration: 600 }"
          class="flex items-center relative w-full"
        >
          <img
            class="absolute left-0 top-0 w-full"
            src="~images/projects/imb.jpg"
            alt="Projeto"
          />
        </picture>
        <h2
          v-anime="{ ...fadeIn, duration: 600 }"
          class="font-semibold px-4 mt-2 mb-1 text-gray-100 text-sm"
        >
          {{ $t('hero.project.title') }}
        </h2>
        <p
          v-anime="{ ...fadeIn, duration: 600 }"
          class="px-4 text-gray-300 text-xs"
        >
          {{ $t('hero.project.description') }}
        </p>
        <a
          v-anime="{ ...fadeIn, duration: 600 }"
          href="https://imobillenegocios.com.br/"
          class="block mx-auto mt-4 text-right text-white text-xs"
          target="_blank"
        >
          {{ $t('hero.project.textLink') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeIn, fadeInTop20 } from '../config/animations.js';

export default {
  name: 'Hero',
  data() {
    return {
      fadeIn,
      fadeInTop20
    };
  }
};
</script>

<style lang="scss" scoped>
.hero {
  &__left {
    height: 80vh;
  }

  &__title {
    p {
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }
  }

  &__right {
    background: linear-gradient(100.12deg, #5480f2, rgba(81, 126, 241, 0.8));
    backdrop-filter: blur(10px);
    border-radius: 0 0 32px 32px;
    overflow: hidden;
    position: relative;
    width: 60%;

    &::after,
    &::before {
      background: linear-gradient(225deg, #c4c4c4, rgba(196, 196, 196, 0));
      border-radius: 50%;
      content: '';
    }

    &::after {
      height: 160px;
      position: absolute;
      right: -80px;
      top: -60px;
      width: 160px;
    }

    &::before {
      bottom: 20px;
      height: 200px;
      left: -100px;
      position: absolute;
      width: 200px;
    }

    &-content {
      max-width: 500px;
      z-index: 5;

      picture {
        border-radius: 10px;
        border: 1px solid #fff;
        overflow: hidden;
        padding-top: 56.25%;

        &::before {
          background: rgba(0, 0, 0, 0.4);
          content: '';
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 2;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .hero {
    &__left {
      height: initial;
    }
  }
}
</style>
