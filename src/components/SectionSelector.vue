<template>
  <div class="rows-list" :style="{ 'grid-template-columns': columns, 'grid-template-rows': rows,
  'width': width, 'padding': padding }">
    <SelectSection v-for="elem in elems" :key="elem" :background="elem.background"
                   :font_size="elem.fontSize" :description="elem.descStatus" :link="elem.link"
                   :column="elem.column" :row="elem.row">
      <template v-slot:default>{{ elem.body }}</template>
      <template v-slot:description>{{ elem.description }}</template>
    </SelectSection>
  </div>
</template>

<script>
import SelectSection from "@/components/SelectSection";
export default {
  name: "SectionSelector",
  components: {SelectSection},
  props: {
    elems: {
      type: Array,
      required: true
    },
    columns: {
      type: String,
      default() {
        return 'repeat(3, 1fr)'
      }
    },
    rows: {
      type: String,
      default() {
        return 'repeat(3, 1fr)'
      }
    },
    width: {
      type: String,
      default() {
        return 'calc(1720%/1920*100)'
      }
    },
    padding: {
      type: String,
      default() {
        return '15px'
      }
    }
  }
}
</script>

<style scoped>
.rows-list {
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-gap: 5%;
  justify-items: center;
  justify-content: center;
}
/*.rows-list * {*/
/*  border: 2px solid black;*/
/*}*/
</style>