<template>
  <v-container class="home">
    <v-row align="center">
      <v-btn color="primary" block
             @click.prevent="onhandleActions('one')">
          {{ $t('BUTTONS.ONE_PLAYER') }}
      </v-btn>
    </v-row>
    <v-row align="center">
      <v-btn color="primary" block
             @click.prevent="onhandleActions('two')">
          {{ $t('BUTTONS.TWO_PLAYERS') }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  methods: {
    onhandleActions(type) {
      this.$router.push({ name: 'game-container', params: { type }})
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
