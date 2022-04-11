<template>
  <HeaderSearch/>
  <router-view/>
  <Footer/>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch";
import Footer from "@/components/Footer";
export default {
  components: {Footer, HeaderSearch},
  mounted() {
    let mathjaxScript = document.createElement('script')
    mathjaxScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML')
    document.head.appendChild(mathjaxScript)
  },
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
}
body{
  height: 100vh;
  width: 100vw;
}
#app {
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>