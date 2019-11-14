export default {
  name: "TCell",
  props: {
    coords: {
      type: Array,
      default: () => [0, 0],
      required: true
    },
    value: {
      type: String,
      default: '',
      required: true
    }
  },
  mounted() {
    this.drawCell()
  },
  methods: {
    drawCell() {
      console.log(this.coords)
      // Pintar border segun coordenadas
      // Pintar contenido
    },
    onCellClick() {
      const data = {
        coords: this.coords,
        value: this.value
      }
      console.log('coords dentro', data)
      this.$emit('click', )
    }
  }
}