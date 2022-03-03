<template>
  <section id="about" class="about lg:mt-20">
    <div class="about__wrapper">
      <div class="container">
        <div
          class="
            about__content
            pt-8
            lg:pt-16
            pb-10
            lg:pb-20 lg:px-20
            rounded-3xl
          "
        >
          <h2
            class="
              font-semibold
              mb-4
              lg:mb-8
              text-2xl
              lg:text-3xl
              text-black-2
              dark:text-white
            "
            data-scroll-anim="fadeInTop20"
          >
            {{ $t('about.title') }}
          </h2>

          <p
            class="
              text-gray-600
              dark:text-gray-300
              text-sm
              lg:text-base
              mb-4
              lg:mb-8
            "
            data-scroll-anim="fadeInTop20"
          >
            {{ $t('about.description[0]') }}
          </p>

          <p
            class="
              mb-8
              lg:mb-10
              text-gray-600
              dark:text-gray-300
              text-sm
              lg:text-base
            "
            data-scroll-anim="fadeInTop20"
          >
            {{ $t('about.description[1]') }}
          </p>

          <div
            class="
              about__infos
              flex
              items-start
              lg:items-center
              flex-col
              lg:flex-row
            "
          >
            <div
              class="about__profile flex items-center mr-8 mb-4 lg:mb-0"
              data-scroll-anim="fadeInTop20"
            >
              <picture
                class="
                  border-gray-500
                  dark:border-white
                  flex
                  overflow-hidden
                  rounded-full
                  mr-2
                "
              >
                <img src="~images/avatar60px.png" alt="" />
              </picture>
              <div class="flex flex-col">
                <p
                  class="
                    font-semibold
                    mb-0
                    text-sm text-black-2
                    dark:text-white
                  "
                >
                  Vitor Costa
                </p>
                <small class="m-0 text-gray-500 text-xs whitespace-nowrap">
                  {{ $t('about.occupation') }}
                </small>
              </div>
            </div>

            <div class="about-__social flex w-full">
              <about-me-card
                link="https://github.com/vitorcosta039/"
                text="GitHub"
                class="mr-2 lg:mr-4"
                data-scroll-anim="fadeInTop20"
              >
                <template #icon>
                  <img src="~images/github.png" alt="Github" />
                </template>
              </about-me-card>

              <about-me-card
                link="https://www.linkedin.com/in/jose-costaa/"
                text="Linkedin"
                class="mr-2 lg:mr-4"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="400"
              >
                <template #icon>
                  <img src="~images/linkedin.png" alt="Github" />
                </template>
              </about-me-card>

              <about-me-card
                link="https://www.behance.net/vitorcosta0"
                text="Behance"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="600"
              >
                <template #icon>
                  <img src="~images/behance.png" alt="Github" />
                </template>
              </about-me-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fadeIn, fadeInTop20 } from '../../config/animations.js';

export default {
  name: 'About',
  data() {
    return {
      age: 0,
      fadeIn,
      fadeInTop20
    };
  },
  created() {
    this.age = this.getAge('2000/07/31');
  },
  methods: {
    getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  &__wrapper {
    background: rgba($color: $primary, $alpha: 0.05);
    border-color: rgba($color: $primary, $alpha: 0.2);
    border-style: solid;
    border-width: 1px 0;
  }

  &__profile {
    picture {
      border-style: solid;
      border-width: 1px;
      height: 40px;
      min-width: 40px;
      position: relative;
      width: 40px;

      &::after {
        background: rgba($color: #000000, $alpha: 0.3);
        content: '';
        height: 40px;
        position: absolute;
        width: 40px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .about {
    &__wrapper {
      background: initial;
      border: initial;
    }

    &__content {
      background: rgba($color: $primary, $alpha: 0.05);
      border-color: rgba($color: $primary, $alpha: 0.2);
      border-width: 1px;
    }
  }
}
</style>
