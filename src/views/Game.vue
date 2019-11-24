<template>
  <div class="game">
    <div class="game__turn">
      <div>Es el turno de</div>
      <div>{{ currentPlayer }}</div>
    </div>
    <t-dashboard class="game__dashboard"
                 @currentPlayer="onCurrentPlayer"
                 @finish="onFinish">
    </t-dashboard>

    <!-- Dialog for show winner -->
    <v-dialog v-model="showWinnerDialog" persistent>
      <v-card class="d-flex flex-column align-center">
        <v-avatar size="75">
          <v-img alt="Winner medal"
                 src="@/assets/img/winner_medal.svg">
          </v-img>
        </v-avatar>
        <v-card-text class="text--primary center">
          {{ winPlayer }}
        </v-card-text>
        <v-card-actions class="d-flex flex-row align-end">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onCancelDialogClick">Salir</v-btn>
          <v-btn color="blue darken-1" text @click="onAcceptDialogClick">Nuevo juego</v-btn>
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
      currentPlayer: '',
      winPlayer: '',
      showWinnerDialog: true
    }
  },
  beforeMount() {
    const { type } = this.$route.params
    console.log('Nuevo juego de tipo: ', type)
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
    },
    onAcceptDialogClick() {
      this.showWinnerDialog = false
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