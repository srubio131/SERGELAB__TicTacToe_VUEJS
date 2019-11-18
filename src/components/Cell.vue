<template>
  <div class="cell" :class="classes"
       @click="onCellClick">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "TCell",
  props: {
    coords: {
      type: Array,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    maxCell: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      classes: ''
    }
  },
  mounted() {
    this.drawCell()
  },
  methods: {
    drawCell() {
      const x = this.coords[0]
      const y = this.coords[1]
      if (x === 0) {
        this.classes += ' border-left-none'
      }
      if (x === this.maxCell) {
        this.classes += ' border-right-none'
      }
      if (y === 0) {
        this.classes += ' border-top-none'
      }
      if (y === this.maxCell) {
        this.classes += ' border-bottom-none'
      }
    },
    onCellClick() {
      const data = {
        coords: this.coords,
        value: this.content
      }
      this.$emit('click', data)
    }
  }
}
</script>

<style scoped lang="scss">
.cell {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.border-top-none {
  border-top: none;
}
.border-right-none {
  border-right: none;
}
.border-bottom-none {
  border-bottom: none;
}
.border-left-none {
  border-left: none;
}
</style>