<template>
  <header
    ref="header"
    class="
      header
      bg-white
      dark:bg-black-2
      fixed
      flex
      h-16
      lg:h-20
      items-center
      w-full
    "
  >
    <div class="container flex items-center justify-between">
      <nuxt-link :to="`/${$i18n.locale !== 'en' ? $i18n.locale : ''}`">
        <Logo />
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
            <Logo class="mt-8" />
            <button type="button" @click="toggleMenu(false)">
              <OutlineXIcon width="24" class="text-gray-400" />
            </button>
          </div>

          <nav class="w-full">
            <ul class="flex flex-col lg:flex-row mb-8 lg:mb-0">
              <li>
                <header-link link="#">
                  <OutlineUserIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.about-me') }}
                </header-link>
              </li>
              <li>
                <header-link link="#">
                  <OutlineChartBarIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.skills') }}
                </header-link>
              </li>
              <li>
                <header-link link="#">
                  <OutlineClipboardListIcon
                    width="24"
                    class="flex lg:hidden mr-3"
                  />
                  {{ $t('menu.portfolio') }}
                </header-link>
              </li>
              <li>
                <header-link link="#">
                  <OutlinePuzzleIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.experience') }}
                </header-link>
              </li>
              <li>
                <header-link link="#">
                  <OutlineMailIcon width="24" class="flex lg:hidden mr-3" />
                  {{ $t('menu.contact') }}
                </header-link>
              </li>
            </ul>
          </nav>

          <ul class="header__social flex items-center lg:ml-4">
            <li>
              <header-social-link
                link="https://www.instagram.com/vitorcosta.dev/"
                title="Instagram"
              >
                <IconInstagram class="icon--stroke" />
              </header-social-link>
            </li>
            <li>
              <header-social-link
                link="https://www.linkedin.com/in/jose-costaa/"
                title="Linkedin"
              >
                <IconLinkedin class="icon--stroke" />
              </header-social-link>
            </li>
            <li>
              <header-social-link
                link="https://www.behance.net/vitorcosta0"
                title="Behance"
              >
                <IconBehance class="icon--fill" />
              </header-social-link>
            </li>
            <li>
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
          <TheChangeTheme id="theme-header" class="mr-2 lg:mr-4" />
          <HeaderLanguage />

          <button
            type="button"
            class="flex lg:hidden ml-6"
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
export default {
  name: 'Header',
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
      content: '1';
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
