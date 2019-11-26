<template>
  <div class="game">
    <div class="game__turn"
         v-if="config.type !== 'one'">
      <div>{{ $t('LABELS.TURN') }}</div>
      <div>{{ currentPlayer }}</div>
    </div>
    <t-dashboard class="game__dashboard"
                 :difficult="config.difficult"
                 @currentPlayer="onCurrentPlayer"
                 @finish="onFinish">
    </t-dashboard>

    <!-- Dialog for show winner -->
    <v-dialog class="game__dialog"
              v-model="showWinnerDialog" persistent>
      <v-card class="d-flex flex-column">
        <v-card-title class="game__dialog--title" color="skyblue">
          <v-avatar size="90">
            <v-img alt="Winner medal"
                  src="@/assets/img/winner_medal.svg">
            </v-img>
          </v-avatar>
        </v-card-title>
        <v-card-text class="text--primary">
          <div class="game__dialog--text-primary">
            {{ showWinner }}
          </div>
        </v-card-text>
        <v-card-actions class="d-flex flex-row justify-end">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onAcceptDialogClick">Nuevo juego</v-btn>
          <v-btn color="blue darken-1" text @click="onCancelDialogClick">Salir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      config: null,
      currentPlayer: '',
      winPlayer: '',
      showWinnerDialog: false
    }
  },
  computed: {
    showWinner() {
      let winner = ''
      if (this.winPlayer === 'empate') {
        winner = this.$t('LABELS.DRAW')
      } else {
        winner = `¡${this.$t('LABELS.WINNER')} ${this.winPlayer}!`
      }
      return winner
    }
  },
  beforeMount() {
    const { config } = this.$route.params
    this.config = config
  },
  methods: {
    onCurrentPlayer(currentPlayer) {
      this.currentPlayer = currentPlayer
    },
    onFinish(winner) {
      this.showWinnerDialog = true
      this.winPlayer = winner
    },
    onCancelDialogClick() {
      this.showWinnerDialog = false
      this.$router.push('/')
    },
    onAcceptDialogClick() {
      this.showWinnerDialog = false
      this.$router.push({ name: 'game-container', params: { type: this.config.type }})
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

  &__dialog--title {
    display: flex;
    justify-content: center;
    background-color: skyblue;
  }

  &__dialog--text-primary {
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-top: 20px;
  }
}
</style>