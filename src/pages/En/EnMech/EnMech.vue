<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "EnMech",
  components: {SectionSelector},
  data () {
    return {
      elems: [
        { body: 'Динамика', background: '#5A6A89', description: 'Dynamics', descStatus: true, fontSize: 40, link: '/En/EnMech/EnMechDyn' },
        { body: 'Кинематика', background: '#66A5AD', description: 'Kinematics', descStatus: true, fontSize: 40, link: '/En/EnMech/EnMechKin' },
      ]
    }
  },
}
</script>

<style scoped>

</style>