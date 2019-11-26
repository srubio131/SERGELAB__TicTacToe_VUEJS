<template>
  <div class="gamecontainer">
    <v-container v-if="config.type === 'one'">
      <v-btn color="primary" block
            @click.prevent="onhandleActions('easy')">
          {{ $t('BUTTONS.EASY') }}
      </v-btn>
      <v-btn color="primary" block disabled
            @click.prevent="onhandleActions('hard')">
          {{ $t('BUTTONS.HARD') }}
      </v-btn>
    </v-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TGameContainer',
  data() {
    return {
      config: {
        type: null,
        difficult: undefined
      }
    }
  },
  beforeMount() {
    const { type } = this.$route.params
    this.config.type = type

    if (this.config.type === 'two') {
      this.$TGameContainer_goToGame()
    }
  },
  methods: {
    onhandleActions(action) {
      this.config.difficult = action
      this.$TGameContainer_goToGame()
    },
    $TGameContainer_goToGame() {
      this.$router.push({ name: 'game', params: { config: this.config } })
    }
  }
}
</script>

<style lang="scss" scoped>
.gamecontainer {
  display: flex;
  width: 100%;

  :not(:first-child) {
    margin-top: 25px;
  }
}
</style>