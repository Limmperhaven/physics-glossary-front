<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Fr",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: 'Formules', descStatus: true, fontSize: 48, link: '/Fr/FrForm'},
        { body: 'Определения', background: '#66A5AD', description: 'Définitions', descStatus: true, fontSize: 48, link: '/Fr/FrDef'},
        { body: 'Термины', background: '#66A5AD', description: 'Termes', descStatus: true, fontSize: 48, link: '/Fr/FrTerm'},
      ]
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 1720px;
  margin: 125px auto 116px auto;
  flex: 1 0 auto;
}
</style>