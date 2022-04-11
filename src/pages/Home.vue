<template>
    <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Home",
  components: {
    SectionSelector
  },
  data () {
    return {
      elems: [
          { body: 'EN', background: '#5A6A89', link: '/En' },
          { body: 'AR', background: '#66A5AD', link: '/Ar' },
          { body: 'ES', background: '#7389B0', link: '/Es' },
          { body: '中文', background: '#99C8E0', link: '/Ch' },
          { body: 'FR', background: '#8FB5C9', link: '/Fr' },
          { body: 'ЯЗ', background: '#6C7A89' },
          { body: 'Магистратура', background: '#AAC8C8', fontSize: 40 },
          { body: 'Лабораторный практикум', background: '#B7D2D9', fontSize: 40, link: '/Lab/Lab' },
          { body: 'Тесты', background: '#C5CDCF', fontSize: 72, link: '/Tasks/Tasks' }
      ]
    }
  }
}
</script>

<style scoped>

</style>