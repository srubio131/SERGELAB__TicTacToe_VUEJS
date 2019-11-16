<template>
  <div class="dashboard">
    <div class="dashboard__row"
         v-for="row in rows" :key="row">
      <t-cell v-for="column in rows" :key="column"
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
    }
  },
  data() {
    return {
      players: ['X', 'O'],
      state: [['', '', ''],
              ['', '', ''],
              ['', '', '']],
      currentIndexPlayer: 0
    }
  },
  mounted() {
    this.$emit('currentPlayer', this.players[0])
  },
  methods: {
    onCellClick(event) {
      const x = event.coords[0]
      const y = event.coords[1]

      if (this.state[x][y] === '') {
        const currentPlayer = this.players[this.currentIndexPlayer]
        Vue.set(this.state[x], y, currentPlayer)
      }

      // Juego terminado?
      if (this.isGameFinished()) {
        this.$emit('finish', this.players[this.currentIndexPlayer])
      } else {
        this.$emit('currentPlayer', this.getNextPlayer())
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
    },
    isGameFinished() {
      return !this.state.join().split(',').includes('')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  &__row {
    //display: flex;
  }
}
</style>