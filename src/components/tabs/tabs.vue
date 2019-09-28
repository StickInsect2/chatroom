<script>

import Content from "./content"

export default {
  name: 'Tabs',
  data() {
    return {
      containers: []
    }
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 1
    }
  },
  methods: {
    onChangeHandler(index) {
      this.$emit("changeCurrentIndex", index);
    }
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <Content containers={this.containers} />
      </div>
    )
  }
}
</script>
<style scoped>
.tabs-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 8px 0 -10px 0;
}
</style>
