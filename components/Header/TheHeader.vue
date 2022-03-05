<template>
  <header
    ref="header"
    class="header fixed flex h-16 lg:h-20 items-center shadow-sm w-full"
  >
    <div class="container flex items-center justify-between">
      <nuxt-link
        v-anime="{ ...fadeIn }"
        :to="`/${$i18n.locale !== 'en' ? $i18n.locale : ''}`"
      >
        <Logo class="header__logo-desktop" />
        <span class="absolute hidden">Vitor Costa</span>
      </nuxt-link>

      <div class="flex items-center">
        <div
          class="
            header__lists
            absolute
            lg:relative
            bg-primary
            flex flex-col
            lg:flex-row
            items-start
            lg:items-center lg:mr-8
            pl-10
            lg:pl-0
            pr-4
            lg:pr-0
            py-5
            lg:py-0
            overflow-hidden
            top-0
            right-0
            w-10/12
            lg:w-auto
          "
        >
          <div class="flex items-start lg:hidden justify-between mb-10 w-full">
            <Logo class="mt-8 header__logo-mobile" />
            <button
              v-wave
              type="button"
              class="rounded-sm text-gray-400"
              @click="toggleMenu(false)"
            >
              <OutlineXIcon width="24" />
            </button>
          </div>

          <nav class="w-full">
            <ul class="flex flex-col lg:flex-row mb-8 lg:mb-0">
              <li v-anime="{ ...fadeInLeft10, duration: 600 }">
                <header-link link="#aboutme" @toggle-menu="toggleMenu(false)">
                  <OutlineUserIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.about-me') }}
                </header-link>
              </li>
              <li v-anime="{ ...fadeInLeft10, delay: 200, duration: 600 }">
                <header-link link="#skills" @toggle-menu="toggleMenu(false)">
                  <OutlineChartBarIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.skills') }}
                </header-link>
              </li>
              <li v-anime="{ ...fadeInLeft10, delay: 400, duration: 600 }">
                <header-link link="#portfolio" @toggle-menu="toggleMenu(false)">
                  <OutlineClipboardListIcon
                    width="24"
                    class="flex lg:hidden mr-3"
                  />
                  {{ $t('menu.portfolio') }}
                </header-link>
              </li>
              <li v-anime="{ ...fadeInLeft10, delay: 600, duration: 600 }">
                <header-link
                  link="#experience"
                  @toggle-menu="toggleMenu(false)"
                >
                  <OutlinePuzzleIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.experience') }}
                </header-link>
              </li>
              <li v-anime="{ ...fadeInLeft10, delay: 800, duration: 600 }">
                <header-link link="#contact" @toggle-menu="toggleMenu(false)">
                  <OutlineMailIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.contact') }}
                </header-link>
              </li>
            </ul>
          </nav>

          <ul class="header__social flex items-center lg:ml-4">
            <li v-anime="{ ...fadeIn, duration: 600 }">
              <header-social-link
                link="https://www.instagram.com/vitorcosta.dev/"
                title="Instagram"
              >
                <IconInstagram class="icon--stroke" />
              </header-social-link>
            </li>
            <li v-anime="{ ...fadeIn, delay: 200, duration: 600 }">
              <header-social-link
                link="https://www.linkedin.com/in/jose-costaa/"
                title="Linkedin"
              >
                <IconLinkedin class="icon--stroke" />
              </header-social-link>
            </li>
            <li v-anime="{ ...fadeIn, delay: 400, duration: 600 }">
              <header-social-link
                link="https://www.behance.net/vitorcosta0"
                title="Behance"
              >
                <IconBehance class="icon--fill" />
              </header-social-link>
            </li>
            <li v-anime="{ ...fadeIn, delay: 600, duration: 600 }">
              <header-social-link
                link="https://github.com/vitorcosta039/"
                title="GitHub"
              >
                <IconGithub class="icon--fill" />
              </header-social-link>
            </li>
          </ul>
        </div>

        <div class="flex items-center">
          <TheChangeTheme
            id="theme-header"
            v-anime="{ ...fadeIn }"
            class="mr-2 lg:mr-4"
          />
          <HeaderLanguage v-anime="{ ...fadeIn, delay: 200, duration: 600 }" />

          <button
            v-wave
            v-anime="{ ...fadeIn, delay: 400, duration: 600 }"
            type="button"
            class="rounded-sm flex lg:hidden ml-6"
            @click="toggleMenu(true)"
          >
            <OutlineMenuAlt3Icon
              width="24"
              class="text-black dark:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { fadeIn, fadeInLeft10 } from '../../config/animations.js';

export default {
  name: 'Header',
  data() {
    return {
      fadeInLeft10,
      fadeIn
    };
  },
  methods: {
    toggleMenu(isActive) {
      if (isActive) {
        return this.$refs.header.classList.add('active--menu');
      }
      return this.$refs.header.classList.remove('active--menu');
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: rgba($color: #fff, $alpha: 0.9);
  backdrop-filter: blur(4px);
  z-index: 999999;
  .header__logo-mobile::v-deep {
    path {
      fill: #ffffff;
    }
  }

  &__lists {
    border-radius: 4px 0 0 4px;
    height: 100vh;
    max-width: 320px;
    transform: translateX(100%);
    transition: all 0.3s;
    z-index: 999;

    &::after,
    &::before {
      background: linear-gradient(225deg, #c4c4c4, hsla(0, 0%, 76.9%, 0));
      border-radius: 50%;
      content: '';
    }

    &::after {
      bottom: 20%;
      height: 168px;
      position: absolute;
      right: -60px;
      width: 168px;
    }

    &::before {
      height: 100px;
      left: -20px;
      position: absolute;
      top: -40px;
      width: 100px;
    }
  }

  &::after {
    transition: all 300ms;
  }

  &__social {
    a {
      svg::v-deep {
        &.icon--fill {
          path {
            fill: #fff;
          }
        }

        &.icon--stroke {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }

  &.active--menu {
    &::after {
      background: rgba($color: #000000, $alpha: 0.5);
      content: '';
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    .header__lists {
      transform: translateX(0%);
    }
  }
}

.dark {
  .header {
    background: rgba($color: $black-2, $alpha: 0.9);
    backdrop-filter: blur(4px);
    .header__logo-desktop::v-deep {
      path {
        fill: #ffffff;
      }
    }
  }
}

@media (min-width: 1024px) {
  .header {
    &__lists {
      background: transparent;
      height: initial;
      max-width: initial;
      transform: initial;

      &::after,
      &::before {
        content: initial;
      }
    }

    &__social {
      a {
        svg::v-deep {
          path {
            transition-duration: 200ms;
            transition-timing-function: ease-in;
          }

          &.icon--fill {
            path {
              fill: $gray-500;
            }
          }

          &.icon--stroke {
            path {
              stroke: $gray-500;
            }
          }
        }

        &:hover {
          svg::v-deep {
            &.icon--fill {
              path {
                fill: #fff;
              }
            }

            &.icon--stroke {
              path {
                stroke: #fff;
              }
            }
          }
        }
      }
    }

    &.active--menu {
      &::after {
        content: initial;
      }
    }
  }
}
</style>
