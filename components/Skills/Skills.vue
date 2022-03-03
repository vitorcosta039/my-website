<template>
  <section class="skills mt-10 lg:mt-20">
    <div class="container">
      <div class="skills__wrapper lg:px-20">
        <h2
          class="
            font-semibold
            mb-4
            lg:mb-8
            text-2xl
            lg:text-3xl
            text-center text-black-2
            dark:text-white
          "
          data-scroll-anim="fadeInTop20"
        >
          skills
        </h2>

        <div class="skills__content flex flex-wrap">
          <div class="skills__left block mb-10 lg:mb-0 w-full lg:w-1/2">
            <h3
              class="
                flex
                items-center
                font-semibold
                mb-2
                lg:mb-4 lg:text-lg
                text-primary
              "
              data-scroll-anim-d="fadeInTop20"
              data-scroll-anim-delay="200"
            >
              <span class="rounded mr-2 lg:mr-4 p-1">
                <OutlineCodeIcon width="24" />
              </span>
              {{ $t('skills.dev-web.title') }}
            </h3>
            <p
              class="
                lg:pr-8
                text-sm
                lg:text-base
                text-gray-600
                dark:text-gray-300
              "
              data-scroll-anim-d="fadeInTop20"
              data-scroll-anim-delay="400"
            >
              {{ $t('skills.dev-web.text') }}
            </p>

            <div class="skills__cards flex flex-wrap mt-2 lg:mt-4">
              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #F15931 0%, #F47933 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="200"
              >
                <template #image>
                  <img src="~images/skills/html.png" alt="HTML" title="HTML" />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #007DC6 0%, #008FD5 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="300"
              >
                <template #image>
                  <img src="~images/skills/css.png" alt="CSS" title="CSS" />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #F58233 0%, #F99D34 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="400"
              >
                <template #image>
                  <img
                    src="~images/skills/js.png"
                    alt="JavaScript"
                    title="JavaScript"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #34495E 0%, #41B883 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="500"
              >
                <template #image>
                  <img src="~images/skills/vue.png" alt="VueJs" title="VueJs" />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #21759B 0%, #2392C5 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="600"
              >
                <template #image>
                  <img
                    src="~images/skills/wp.png"
                    alt="WordPress"
                    title="WordPress"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="linear-gradient(180deg, #7EA8EB 0%, #5B8AD6 100%)"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="700"
              >
                <template #image>
                  <img src="~images/skills/seo.png" alt="SEO" title="SEO" />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="#F05033"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="800"
              >
                <template #image>
                  <img src="~images/skills/git.png" alt="Git" title="Git" />
                </template>
              </skill-card>

              <skill-card
                class="mb-2"
                hovercolor="#000"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="900"
              >
                <template #image>
                  <img
                    src="~images/skills/github.png"
                    alt="GitHub"
                    title="GitHub"
                  />
                </template>
              </skill-card>
            </div>
          </div>

          <div class="skills__right block w-full lg:w-1/2">
            <h3
              class="
                flex
                items-center
                font-semibold
                mb-2
                lg:mb-4 lg:text-lg
                text-additional-1
              "
              data-scroll-anim-d="fadeInTop20"
              data-scroll-anim-delay="200"
            >
              <span class="rounded mr-2 lg:mr-4 p-1">
                <OutlinePhotographIcon width="24" />
              </span>
              {{ $t('skills.design.title') }}
            </h3>
            <p
              class="text-sm lg:text-base text-gray-600 dark:text-gray-300"
              data-scroll-anim-d="fadeInTop20"
              data-scroll-anim-delay="400"
            >
              {{ $t('skills.design.text') }}
            </p>

            <div class="skills__cards flex flex-wrap mt-2 lg:mt-4">
              <skill-card
                class="mr-2 mb-2"
                hovercolor="#F24E1E"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="200"
              >
                <template #image>
                  <img
                    src="~images/skills/figma.png"
                    alt="Figma"
                    title="Figma"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="#FA3BBF"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="300"
              >
                <template #image>
                  <img
                    src="~images/skills/xd.png"
                    alt="Adobe XD"
                    title="Adobe XD"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="#00C8FF"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="400"
              >
                <template #image>
                  <img
                    src="~images/skills/ps.png"
                    alt="Adobe Photoshop"
                    title="Adobe Photoshop"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mr-2 mb-2"
                hovercolor="#C98AFB"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="500"
              >
                <template #image>
                  <img
                    src="~images/skills/ae.png"
                    alt="Adobe After Effects"
                    title="Adobe After Effects"
                  />
                </template>
              </skill-card>

              <skill-card
                class="mb-2"
                hovercolor="#EA77FF"
                data-scroll-anim-d="fadeInTop20"
                data-scroll-anim-delay="600"
              >
                <template #image>
                  <img
                    src="~images/skills/pr.png"
                    alt="Adobe Premiere"
                    title="Adobe Premiere"
                  />
                </template>
              </skill-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
};
</script>

<style lang="scss" scoped>
.skills {
  &__left {
    h3 {
      span {
        background: rgba($color: $primary, $alpha: 0.1);
        border: 1px solid rgba($color: $primary, $alpha: 0.4);
      }
    }
  }

  &__right {
    h3 {
      span {
        background: rgba($color: $additional-1, $alpha: 0.1);
        border: 1px solid rgba($color: $additional-1, $alpha: 0.4);
      }
    }
  }
}
</style>
