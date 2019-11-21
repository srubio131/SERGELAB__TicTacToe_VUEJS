<template>
  <div id="app">
    <v-app-bar absolute>
      <v-btn icon @click.prevent="onBackClick">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title >Tic Tac Toe</v-toolbar-title>
    </v-app-bar>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TApp',
  methods: {
    onBackClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Global styles -->
<style lang="scss" src="@/assets/style.scss"></style>
<style lang="scss">
html, body {
  font-family: 'Lato', sans-serif;
  height: 100%;
}
#app {
  width: 100%;
}
main {
  display: flex;
  justify-content: center;
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
