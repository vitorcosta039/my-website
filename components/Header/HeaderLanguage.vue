<template>
  <div class="language relative">
    <div class="language__active">
      <div class="cursor-pointer flex items-center">
        <img
          v-if="$i18n.locale == 'en'"
          key="USA"
          src="@/assets/images/icons/icon-eua.png"
          alt="USA"
        />
        <img
          v-else
          key="Brasil"
          src="@/assets/images/icons/icon-brasil.png"
          alt="Brasil"
        />
      </div>
    </div>

    <ul
      class="
        language__modal
        absolute
        bg-white
        dark:bg-black-2
        px-2
        py-2.5
        right-0
        rounded
        shadow-md
        w-48
      "
    >
      <li>
        <nuxt-link
          class="
            rounded-sm
            cursor-pointer
            flex
            hover:bg-gray-100
            dark:hover:bg-gray-600
            items-center
            p-2
          "
          :to="switchLocalePath('en')"
        >
          <img src="@/assets/images/icons/icon-eua.png" alt="USA" />
          <p
            class="
              ml-2
              mr-1
              text-gray-600
              dark:text-gray-200
              text-sm
              whitespace-nowrap
            "
          >
            <span class="text-gray-400 dark:text-gray-500">(US)</span> English
          </p>
          <transition name="fadeBottom10" mode="out-in">
            <OutlineCheckIcon
              v-if="$i18n.locale == 'en'"
              class="ml-auto text-success"
              width="20"
            />
          </transition>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="
            rounded-sm
            cursor-pointer
            flex
            hover:bg-gray-100
            dark:hover:bg-gray-600
            items-center
            p-2
          "
          :to="switchLocalePath('br')"
        >
          <img src="@/assets/images/icons/icon-brasil.png" alt="Brasil" />
          <p
            class="
              ml-2
              mr-1
              text-gray-600
              dark:text-gray-200
              text-sm
              whitespace-nowrap
            "
          >
            <span class="text-gray-400 dark:text-gray-500">(BR)</span> Português
          </p>
          <transition name="fadeBottom10" mode="out-in">
            <OutlineCheckIcon
              v-if="$i18n.locale == 'br'"
              class="ml-auto text-success"
              width="20"
            />
          </transition>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderLanguage'
};
</script>

<style lang="scss" scoped>
.language {
  &__modal {
    display: none;
  }

  &:hover {
    .language__modal {
      display: block;
      animation: fadeBottom10 300ms forwards;
    }
  }
}
</style>
