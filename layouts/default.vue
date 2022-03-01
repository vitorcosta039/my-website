<template>
  <div>
    <TheHeader />
    <Nuxt class="page-config" />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.page-config {
  padding-top: 64px;
}

@media (min-width: 1024px) {
  .page-config {
    padding-top: 80px;
  }
}
</style>
