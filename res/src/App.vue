<template>
  <v-app>
    <v-app-bar>
      <v-btn v-if="this.$router.currentRoute.path !== '/'"
             icon @click.prevent="onBackClick">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title> {{ $t('TITLE') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <t-lang-selector></t-lang-selector>
    </v-app-bar>
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
import TLangSelector from '@/components/LangSelector'

export default {
  name: 'TApp',
  components: {
    TLangSelector
  },
  methods: {
    onBackClick() {
      if (this.$router.currentRoute.path === '/game') {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<!-- Global styles -->
<style lang="scss" src="@/assets/style.scss"></style>
<style lang="scss">
html, body {
  font-family: 'Lato', sans-serif;
}
main {
  height: 100%;
  display: flex !important;
  align-items: center;
}
body.no-scroll {
  overflow: hidden;
  width: 100%;
  position: fixed;
}

@media (min-width: 767px) {
  main {
      width: 483px;
      margin-left: auto;
      margin-right: auto;
  }
}
</style>
