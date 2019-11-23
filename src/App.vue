<template>
  <v-app>
    <v-app-bar absolute>
      <v-btn icon @click.prevent="onBackClick">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title >Tic Tac Toe</v-toolbar-title>
    </v-app-bar>
    <main>
      <router-view/>
    </main>

    <!-- Generic Dialog -->
    <!-- <v-dialog v-model="this.$store.state.dialog.show" persistent>
      <v-card>
        <v-card-title class="headline">
          {{ this.$store.state.dialog.title }}
        </v-card-title>
        <v-card-text>
          {{ this.$store.state.dialog.description }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onCancelClick">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="onAcceptClick">Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-app>
</template>

<script>
export default {
  name: 'TApp',
  data() {
    return {
      // 
    }
  },
  methods: {
    onBackClick() {
      this.$router.go(-1)
    },
    /*onCancelClick() {
      this.$store.dispatch('SHOW_DIALOG', false)
    },
    onAcceptClick() {
      this.$store.dispatch('SHOW_DIALOG', false)
    }*/
  }
}
</script>

<!-- Global styles -->
<style lang="scss" src="@/assets/style.scss"></style>
<style lang="scss">
html, body {
  font-family: 'Lato', sans-serif;
}
#app {
  /* width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  
  justify-content: flex-start; // align items in Main Axis
  align-items: stretch; // align items in Cross Axis
  align-content: stretch; // Extra space in Cross Axis
  */
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
