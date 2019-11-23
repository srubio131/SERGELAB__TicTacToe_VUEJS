<template>
  <v-container class="home">
    <v-row align="center">
      <v-btn color="primary" block dark
             @click.prevent="onhandleActions('one')">
          Un jugador
      </v-btn>
    </v-row>
    <v-row align="center">
      <v-btn color="primary" block dark
             @click.prevent="onhandleActions('two')">
          Dos jugadores
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  methods: {
    onhandleActions(type) {
      this.$router.push({ name: 'game', params: { type }})
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 30px;

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
}
</style>
