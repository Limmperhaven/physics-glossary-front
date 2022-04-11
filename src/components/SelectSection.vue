<template>
  <div id="root" :style="{ 'grid-column': column, 'grid-row': row }">
    <div class="ss-wrapper" :style="{ 'background': background, 'font-size': `${font_size}px` }"
         @click="this.$router.push(link)">
        <span>
           <slot/>
        </span>
    </div>
    <div v-if="description" class="description">
       <slot name="description"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectSection",
  data () {
    return {
    }
  },
  props: {
    background: {
      type: String,
      default: '#99C8E0'
    },
    font_size: {
      type: Number,
      default: 96
    },
    description: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    },
    column: {
      type: String,
      default() {
        return 'initial'
      }
    },
    row: {
      type: String,
      default() {
        return 'auto'
      }
    }
  }
}
</script>

<style scoped>
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }

  .ss-wrapper {
    height: 95%;
    width: 95%;
    margin-bottom: 10px;
    flex: 1;
    display: flex;
    border: 1px solid #6B6B6B;
    border-radius: 15px;
    /*box-shadow: 3px 3px 3px 3px #A0A2A3;*/
    align-items: center;
    justify-content: center;
    font-family: Prata,serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    color: #FFFF;
  }
  .ss-wrapper span {
    text-align: center;
  }

  .description {
    flex: none;
    font-family: Prata,serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    height: 30px;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    color: #000000;
    margin-top: 10px;
  }
</style>