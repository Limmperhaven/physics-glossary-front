<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Ch",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: '公式', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynForm'},
        { body: 'Определения', background: '#66A5AD', description: '定义', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynDef'},
        { body: 'Термины', background: '#66A5AD', description: '术语', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynTerm'},
      ]
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 1720px;
}
</style>