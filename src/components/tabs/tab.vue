<script>
export default {
  name: "Tab",
  data() {
    return {

    }
  },
  props: {
    tabName: {
      type: String,
      default: "tab"
    },
    index: {
      type: [String, Number],
      default: 1
    }
  },
  mounted() {
    this.$parent.containers.push(this);
  },
  computed: {
    active() {
      return this.index === this.$parent.currentIndex
    }
  },
  methods: {
    changeIndexHandler() {
      this.$parent.onChangeHandler(this.index);
    }
  },
  render() {

    let currentClass = {
      tab: true,
      active: this.active
    }

    return (
      <li onClick={this.changeIndexHandler.bind(this)} class={currentClass}>{this.tabName}</li>
    )
  }
}
</script>
<style scoped>
.tab {
  position: relative;
  width: 33.33%;
  height: 36px;
  line-height: 36px;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
}
.tab.active {
  border-bottom: 2px solid #3fdd86;
}
</style>
