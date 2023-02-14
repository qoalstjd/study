<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Bae Minseong',
      message: 'Welcome 배민성'
    }
  }
}
</script>

<style scoped></style>
