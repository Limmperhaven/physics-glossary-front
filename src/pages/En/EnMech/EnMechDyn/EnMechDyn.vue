<template>
  <SectionSelector :elems="elems" :rows="rows" :columns="columns" :width="width" :padding="padding"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "EnMechDyn",
  components: {SectionSelector},
  data() {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: 'Formulas', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynForm'},
        { body: 'Определения', background: '#66A5AD', description: 'Definitions', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynDef'},
        { body: 'Термины', background: '#66A5AD', description: 'Terms', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynTerm'},
      ],
      columns: 'repeat(3, 1fr)',
      rows: 'repeat(2, minmax(256px, 300px))',
      width: 'calc(1720%/1920*100)',
      padding: '25px 15px 15px 15px'
    }
  }
}
</script>

<style scoped>

</style>