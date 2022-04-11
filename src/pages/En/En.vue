<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "En",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: 'Formulas', descStatus: true, fontSize: 48, link: '/En/EnForm'},
        { body: 'Определения', background: '#66A5AD', description: 'Definitions', descStatus: true, fontSize: 48, link: '/En/EnDef'},
        { body: 'Термины', background: '#66A5AD', description: 'Terms', descStatus: true, fontSize: 48, link: '/En/EnTerm'},
      ]
    }
  },
}
</script>

<style scoped>

</style>