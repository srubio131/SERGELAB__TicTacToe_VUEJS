<template>
  <div class="game">
    <div class="game__turn">
      <div>Es el turno de</div>
      <div>{{ currentPlayer }}</div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  >:not(:last-child) {
    margin-bottom: 20px;
  }

  &__turn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>