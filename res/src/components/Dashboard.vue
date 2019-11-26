<template>
  <div class="dashboard">
    <div class="dashboard__row"
         v-for="row in rows" :key="row">
      <t-cell v-for="column in rows" :key="`${row}-${column}`"
            :coords="[row - 1, column - 1]"
            :maxCell="rows - 1"
            :content="state[row - 1][column - 1]"
            @click="onCellClick">
      </t-cell>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TCell from '@/components/Cell'
import { TicTacToe } from '@/api/tic-tac-toe'

export default {
  name: "TDashboard",
  components: {
    TCell
  },
  props: {
    rows: {
      type: Number,
      default: 3,
      required: false
    },
    difficult: {
      type: String,
      default: undefined,
      required: false
    }
  },
  data() {
    return {
      players: ['X', 'O'],
      state: null,
      currentIndexPlayer: 0,
      isGameFinished: false
    }
  },
  beforeMount() {
    this.$emit('currentPlayer', this.players[0])
    TicTacToe.initialize(this.rows, this.players)
    this.state = TicTacToe.getState()
  },
  methods: {
    onCellClick(event) {
      const x = event.coords[0]
      const y = event.coords[1]
      const currentPlayer = this.players[this.currentIndexPlayer]

      if (this.state[x][y] === '' && !this.isGameFinished) {
        TicTacToe.makeMove(x, y, currentPlayer)
        this.state = TicTacToe.getState()

        // Juego terminado?
        this.isGameFinished = TicTacToe.isGameFinished(currentPlayer)
        if (this.isGameFinished) {
          this.$emit('finish', this.isGameFinished)
        } else {
          if (this.difficult) {
            if (this.difficult === 'easy') {
              TicTacToe.makeMoveIAEasy(this.getNextPlayer())
            }
          }
          this.$emit('currentPlayer', this.getNextPlayer())
        }
      }
    },
    getNextPlayer() {
        // First time
        if (this.currentIndexPlayer + 1 < this.players.length) {
          this.currentIndexPlayer += 1
        } else {
          this.currentIndexPlayer = 0
        }
        return this.players[this.currentIndexPlayer]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &__row {
    display: flex;
  }
}
</style>