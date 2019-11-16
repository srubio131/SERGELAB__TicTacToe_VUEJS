<template>
  <div class="game">
    <div>Le toca a: {{ currentPlayer }}</div>
    <t-dashboard class="game__dashboard"
                 @currentPlayer="onCurrentPlayer"
                 @finish="onFinish"></t-dashboard>
    <div v-if="winPlayer">El ganador es: {{ winPlayer }}</div>
  </div>
</template>

<script>
import TDashboard from '@/components/Dashboard'

export default {
  name: "Game",
  components: {
    TDashboard
  },
  data() {
    return {
      currentPlayer: '',
      winPlayer: ''
    }
  },
  methods: {
    onCurrentPlayer(currentPlayer) {
      this.currentPlayer = currentPlayer
    },
    onFinish(winner) {
      this.winPlayer = winner
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  &div:first-child {
    margin-bottom: 10px;
  }
  &__dashboard {
    height: 85%
  }
}
</style>