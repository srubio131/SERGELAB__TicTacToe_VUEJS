<template>
  <v-app>
    <v-app-bar absolute>
      <v-btn v-if="this.$router.currentRoute.path !== '/'"
             icon @click.prevent="onBackClick">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Tic Tac Toe</v-toolbar-title>
    </v-app-bar>
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'TApp',
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
  padding-top: 60px;
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
