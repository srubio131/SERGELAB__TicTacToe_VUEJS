<template>
  <div class="dashboard">
    <div class="dashboard__row"
         v-for="row in 3" :key="row">
      <cell v-for="column in 3" :key="column"
            :coords="[row - 1, column - 1]"
            value="O"
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
  methods: {
    onCellClick(event) {
      console.log(event)
      //alert('pincho', event)
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