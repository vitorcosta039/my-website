<template>
  <header class="header bg-white dark:bg-black-2 flex h-20 items-center">
    <div class="container flex items-center justify-between">
      <Logo />

      <div class="flex items-center">
        <div class="flex items-center mr-8">
          <nav>
            <ul class="flex">
              <li>
                <a
                  class="
                    duration-200
                    ease-in
                    flex
                    hover:bg-primary hover:text-white
                    px-4
                    py-1.5
                    rounded
                    text-gray-400
                  "
                  href="#"
                  :title="$t('menu.about-me')"
                >
                  {{ $t('menu.about-me') }}
                </a>
              </li>
              <li>
                <a
                  class="
                    duration-200
                    ease-in
                    flex
                    hover:bg-primary hover:text-white
                    px-4
                    py-1.5
                    rounded
                    text-gray-400
                  "
                  href="#"
                  :title="$t('menu.skills')"
                >
                  {{ $t('menu.skills') }}
                </a>
              </li>
              <li>
                <a
                  class="
                    duration-200
                    ease-in
                    flex
                    hover:bg-primary hover:text-white
                    px-4
                    py-1.5
                    rounded
                    text-gray-400
                  "
                  href="#"
                  :title="$t('menu.portfolio')"
                >
                  {{ $t('menu.portfolio') }}
                </a>
              </li>
              <li>
                <a
                  class="
                    duration-200
                    ease-in
                    flex
                    hover:bg-primary hover:text-white
                    px-4
                    py-1.5
                    rounded
                    text-gray-400
                  "
                  href="#"
                  :title="$t('menu.experience')"
                >
                  {{ $t('menu.experience') }}
                </a>
              </li>
              <li>
                <a
                  class="
                    duration-200
                    ease-in
                    flex
                    hover:bg-primary hover:text-white
                    px-4
                    py-1.5
                    rounded
                    text-gray-400
                  "
                  href="#"
                  :title="$t('menu.contact')"
                >
                  {{ $t('menu.contact') }}
                </a>
              </li>
            </ul>
          </nav>

          <ul class="header__social flex items-center ml-4">
            <li>
              <a
                class="
                  duration-200
                  ease-in
                  flex
                  hover:bg-primary
                  p-2
                  rounded-full
                "
                target="_black"
                href="https://www.instagram.com/vitorcosta.dev/"
                title="Instagram"
              >
                <IconInstagram class="icon--stroke" />
              </a>
            </li>
            <li>
              <a
                class="
                  duration-200
                  ease-in
                  flex
                  hover:bg-primary
                  p-2
                  rounded-full
                "
                target="_black"
                href="https://www.linkedin.com/in/jose-costaa/"
                title="Linkedin"
              >
                <IconLinkedin class="icon--stroke" />
              </a>
            </li>
            <li>
              <a
                class="
                  duration-200
                  ease-in
                  flex
                  hover:bg-primary
                  p-2
                  rounded-full
                "
                target="_black"
                href="https://www.behance.net/vitorcosta0"
                title="Behance"
              >
                <IconBehance class="icon--fill" />
              </a>
            </li>
            <li>
              <a
                class="
                  duration-200
                  ease-in
                  flex
                  hover:bg-primary
                  p-2
                  rounded-full
                "
                target="_black"
                href="https://github.com/vitorcosta039/"
                title="Github"
              >
                <IconGithub class="icon--fill" />
              </a>
            </li>
          </ul>
        </div>

        <div class="flex items-center">
          <TheChangeTheme id="theme-header" class="mr-4" />
          <HeaderLanguage />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header {
  &__social {
    a {
      svg::v-deep {
        path {
          transition-duration: 200ms;
          transition-timing-function: ease-in;
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
}
</style>
