<template>
  <div class="dashboard">
    <div class="dashboard__row"
         v-for="row in rows" :key="row">
      <cell v-for="column in 3" :key="column"
            :coords="[row - 1, column - 1]"
            :maxCell="rows - 1"
            :value="''"
            @click="onCellClick">
      </cell>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell'

export default {
  name: "TDashboard",
  components: {
    Cell
  },
  data() {
    return {
      rows: 3,
      state: [['', '', ''],
              ['', '', ''],
              ['', '', '']]
    }
  },
  methods: {
    onCellClick(event) {
      console.log(event)
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