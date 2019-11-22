<template>
  <div class="home">
    <section class="home__actions">
      <v-btn color="primary" block dark
             @click.prevent="onhandleActions('one')">
          Un jugador
      </v-btn>
      <v-btn color="primary" block dark
             @click.prevent="onhandleActions('two')">
          Dos jugadores
      </v-btn>
    </section>
  </div>
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
