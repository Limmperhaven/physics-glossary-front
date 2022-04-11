<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Es",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: 'Formulas', descStatus: true, fontSize: 48, link: '/Es/EsForm'},
        { body: 'Определения', background: '#66A5AD', description: 'Definiciones', descStatus: true, fontSize: 48, link: '/Es/EsDef'},
        { body: 'Термины', background: '#66A5AD', description: 'Términos', descStatus: true, fontSize: 48, link: '/Es/EsTerm'},
      ]
    }
  },
}
</script>

<style scoped>

</style>