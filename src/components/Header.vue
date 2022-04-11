<template>
  <header>
    <img src="@/assets/pictures/logo.svg" @click="this.$router.push('/')" alt="HSE Logo">
    <span class="name">Глоссарий по физике</span>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  flex: none;
  width: 100%;
  height: 90px;
  background: #0C2D69;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name {
  font-family: HSE Sans,serif;
  font-size: 54px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #FFFF;
  align-self: flex-end;
}
img {
  cursor: pointer;
}
</style>