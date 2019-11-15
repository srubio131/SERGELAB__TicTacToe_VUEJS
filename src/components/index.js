export default {
  name: "TCell",
  props: {
    coords: {
      type: Array,
      required: true
    },
    value: {
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
      console.log(x,y)
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
        value: this.value
      }
      this.$emit('click', data)
    }
  }
}