<template>
  <div>
    <button @click="increaseCouter">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCouter() {
      this.counter += 1
    }
  }
}
</script>
