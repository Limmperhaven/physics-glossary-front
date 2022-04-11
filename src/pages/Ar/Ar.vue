<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Ar",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Формулы', background: '#5A6A89', description: 'الصيغ', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynForm'},
        { body: 'Определения', background: '#66A5AD', description: 'تعريفات', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynDef'},
        { body: 'Термины', background: '#66A5AD', description: 'المفاهيم', descStatus: true, fontSize: 48, link: '/En/EnMech/EnMechDyn/EnMechDynTerm'},
      ]
    }
  },
}
</script>

<style scoped>

</style>