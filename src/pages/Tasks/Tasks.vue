<template>
  <SectionSelector :elems="elems"/>
</template>

<script>
import SectionSelector from "@/components/SectionSelector";
export default {
  name: "Tasks",
  components: {
    SectionSelector
  },
  data () {
    return {
      elems: [
        { body: 'Механика', background: '#5A6A89', fontSize: 48, link: '/Tasks/TasksMech' },
        { body: 'Молекулярная физика', background: '#66A5AD', fontSize: 48, link: '#' },
        { body: 'Оптика', background: '#7389B0', fontSize: 48, link: '#' },
      ]
    }
  }
}
</script>

<style scoped>

</style>