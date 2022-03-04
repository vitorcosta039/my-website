<template>
  <section class="portfolio mt-10 lg:mt-20">
    <div class="container">
      <div
        class="
          portfolio__header
          flex flex-col
          sm:flex-row
          items-center
          justify-between
          mb-4
          lg:mb-8
        "
      >
        <h2
          class="
            font-semibold
            mb-4
            sm:mb-0
            text-2xl
            lg:text-3xl
            text-black-2
            dark:text-white
          "
          data-scroll-anim="fadeInTop20"
        >
          {{ $t('portfolio.title') }}
        </h2>

        <!-- <div class="portfolio__checks flex flex-wrap items-center">
          <Checkbox id="all" class="mb-4 sm:mb-0" @toggle-filter="toggleFilter">
            <template #title>
              {{ $t('portfolio.filters[0]') }}
            </template>
          </Checkbox>
          <Checkbox
            id="personal"
            class="mb-4 sm:mb-0 mx-2 sm:mx-4"
            @toggle-filter="toggleFilter"
          >
            <template #title>
              {{ $t('portfolio.filters[1]') }}
            </template>
          </Checkbox>
          <Checkbox
            id="professional"
            class="mb-4 sm:mb-0"
            @toggle-filter="toggleFilter"
          >
            <template #title>
              {{ $t('portfolio.filters[2]') }}
            </template>
          </Checkbox>
        </div> -->
      </div>

      <div class="portfolio__projects flex flex-wrap">
        <PortfolioProjectCard
          v-for="(prj, index) in projects"
          :key="index"
          :link="prj.link"
          data-scroll-anim-d="fadeInTop20"
          :data-scroll-anim-delay="index * 100"
        >
          <template #image>
            <img
              class="absolute"
              :src="require(`@/assets/images/projects/${prj.img}`)"
              :alt="prj.title"
            />
          </template>
          <template #title>
            <p class="text-sm">{{ prj.title }}</p>
          </template>
          <template #description>
            <p class="project__description text-xs text-gray-400">
              {{ $t(`portfolio.projects['${prj.key}'].description`) }}
            </p>
          </template>
          <template #category>
            <p
              class="
                project__category
                absolute
                bg-white
                font-semibold
                p-1
                rounded-sm
                shadow-sm
                text-xs
              "
            >
              {{ $t(`portfolio.projects['${prj.key}'].category`) }}
            </p>
          </template>
        </PortfolioProjectCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          title: 'Imobille',
          img: 'imb.svg',
          key: 'imb',
          link: 'https://imobillenegocios.com.br/'
        },
        {
          title: 'Zinco',
          img: 'zinco.svg',
          key: 'zinco',
          link: 'https://www.zinco.com.br/'
        },
        {
          title: 'Maria Valentina',
          img: 'mv.svg',
          key: 'mv',
          link: 'https://www.mariavalentina.com.br/'
        },
        {
          title: 'Esporte Fino',
          img: 'efs.svg',
          key: 'efs',
          link: 'https://www.esportefinostore.com.br/'
        },
        {
          title: 'Scalon',
          img: 'scl.svg',
          key: 'scl',
          link: 'https://www.scalon.com.br/'
        }
      ]
    };
  },
  methods: {
    toggleFilter(infos) {
      // console.log(infos);
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__checks {
  }

  &__projects {
    .project::v-deep {
      width: 100%;
    }
  }
}

@media (min-width: 640px) {
  .portfolio {
    &__projects {
      .project {
        width: calc(100% / 2 - 8px);

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(5) {
          margin-right: 16px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .portfolio {
    &__projects {
      .project {
        width: calc(100% / 3 - 8px);

        &:nth-child(1),
        &:nth-child(3) {
          margin-right: 0;
        }

        &:nth-child(2),
        &:nth-child(5) {
          margin-left: 12px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
