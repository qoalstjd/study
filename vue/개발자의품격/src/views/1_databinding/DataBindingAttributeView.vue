<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />
    <!-- attr bind 시 :콜론만 사용하여 v-bind 대체 가능 -->
    <br />
    <img :src="imgSrc" alt="" style="width: 100px" />
    <br />
    <input type="search" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: 'Bae minseong',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
