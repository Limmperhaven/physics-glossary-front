<template>
  <div class="wrapper" v-if="!isItemsLoading">
    <span class="title">Fórmulas de electrodinámica en Español</span>
    <div class="list">
      <div class="legend">
        <span style="flex: 1">Español</span>
        <span style="flex: 1">Ruso</span>
        <span style="flex: 2">Fórmula</span>
        <span style="flex: 3">Comentario</span>
      </div>
      <div class="list-item" v-for="item in this.items" :key="item">
        <span id="name">
          {{ item.name }}
        </span>
        <span id="name_rus">
          {{ item.name_rus }}
        </span>
        <span id="body">
          {{ item.value }}
        </span>
        <span id="body_rus">
          {{ item.comment }}
        </span>
      </div>
    </div>
  </div>
  <div class="loading" v-else>Идет загрузка...</div>
</template>

<script>
import formulasAPI from "@/services/formulasAPI";
export default {
  name: "EsFormEldyn",
  data() {
    return {
      items: [],
      isItemsLoading: true,
      page: 1
    }
  },
  methods: {
    async fetch() {
      this.isItemsLoading = true
      this.items = [...JSON.parse(JSON.stringify(
          await formulasAPI.getFormulasList('esp', this.page, 'electrodynamics'))).rows]
      this.isItemsLoading = false
    },
    async append() {
      this.page++
      const buffer = [...JSON.parse(JSON.stringify(
          await formulasAPI.getFormulasList('esp', this.page, 'electrodynamics'))).rows]
      for(let item of buffer) {
        this.items.push(item)
      }
    },
    async scroll() {
      const itemsList = document.querySelector('.list')
      itemsList.addEventListener('scroll', async () => {
        if (itemsList.scrollTop + itemsList.clientHeight >= itemsList.scrollHeight) {
          await this.append()
          this.reRender()
        }
      })
    },
    reRender() {
      if (window.MathJax) {
        window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
      }
    }
  },
  async mounted() {
    await this.fetch()
    await this.scroll()
    this.reRender()
  }
}
</script>

<style scoped>
.wrapper {
  /*flex: 1;*/
  width: auto;
  height: 500px;
  /*width: calc(1720%/1920*100);*/
  margin: 15px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  font-family: Prata,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  height: 2em;
  flex: none;
}
.list {
  overflow-y: auto;
  width: 80%;
}
.legend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  /*width: auto;*/
  background: #99C8E0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /*position: fixed;*/
}
.legend span {
  width: 50%;
  height: 100%;
  line-height: 75px;
  text-align: left;
  vertical-align: middle;
  font-family: Prata,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  padding: 5px;
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
}
.list div:nth-child(even) {
  background: rgba(153, 200, 224, 0.4);
}
.list-item span {
  width: 50%;
  height: 100%;
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  padding: 5px;
}
#name {
  flex: 1;
}
#name_rus {
  flex: 1;
}
#body {
  flex: 2;
}
#body_rus {
  flex: 3;
}
.loading {
  flex: 1
}
</style>