<template>
  <footer class="footer mt-10 lg:mt-20shadow text-center">
    <section id="contact" class="bg-primary overflow-hidden pt-10 pb-8 relative">
      <div class="container">
        <h2
          class="font-semibold text-xl lg:text-2xl text-white"
        >
          {{ $t('footer.contact.title') }}
        </h2>
        <small class="text-gray-400">{{ $t('footer.contact.quote') }}</small>

        <ul class="flex items-center justify-center mt-4 lg:mt-8">
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
          <li>
            <header-social-link
              link="mailto:vitorcostacontato588@gmail.com"
              title="Email"
            >
              <OutlineMailIcon width="20" color="#D3D3D3" />
            </header-social-link>
          </li>

           <li>
            <header-social-link
              link="https://contate.me/vitorcosta"
              title="WhatsApp"
            >
              <IconWhatsApp width="20" color="#D3D3D3" />
            </header-social-link>
          </li>

          <li>
            <header-social-link
              :link="`${$i18n.locale === 'en' ? '/curriculo-en.pdf' : '/curriculo-pt.pdf'}`"
              title="Currículo"
            >
              <OutlineDocumentTextIcon width="20" color="#D3D3D3" />
            </header-social-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-white dark:bg-black-2 py-4">
      <div
        class="
          container
          flex flex-col
          sm:flex-row
          items-center
          justify-center
          text-xs
          lg:text-sm
        "
      >
        <p class="text-gray-600 dark:text-gray-400 sm:mr-2">
          © {{ $t('footer.rights') }} - Vitor Costa | 2022
        </p>
        <span class="hidden sm:flex text-gray-400 dark:text-black">•</span>
        <a
          class="
            sm:ml-2
            text-gray-500
            dark:text-gray-600
            hover:underline hover:decoration-1
          "
          href="mailto:vitorcosta588@gmail.com"
        >
          vitorcosta588@gmail.com
        </a>
      </div>
    </section>
  </footer>
</template>

<script>
import HeaderSocialLink from '../Header/HeaderSocialLink.vue';
export default {
  name: 'Footer',
  components: { HeaderSocialLink }
};
</script>

<style lang="scss" scoped>
.footer {
  #contact {
    &::after,
    &::before {
      background: linear-gradient(225deg, #c4c4c4, rgba(196, 196, 196, 0));
      border-radius: 50%;
      content: '';
    }

    &::after {
      bottom: -80px;
      height: 160px;
      position: absolute;
      right: -80px;
      width: 160px;
    }

    &::before {
      bottom: 20px;
      height: 200px;
      left: -100px;
      position: absolute;
      width: 200px;
    }
  }
}
</style>
