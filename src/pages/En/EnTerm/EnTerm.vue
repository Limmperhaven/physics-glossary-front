<template>
  <div class="form-outline my-input-search">
    <input type="search" id="form1" class="form-control" placeholder="Search term..." aria-label="Search" />
  </div>
  <div class="wrapper" v-if="!isItemsLoading">
    <!--    <span class="title">General terms and definitions in English</span>-->
    <div class="list">
      <div class="legend">
        <span style="flex: 1">English</span>
        <span style="flex: 1">Russian</span>
<!--        <span style="flex: 2">Explanation in english</span>-->
<!--        <span style="flex: 2">Explanation in russian</span>-->
      </div>
      <div class="list-item" v-for="item in this.items" :key="item">
        <span id="name">
          {{ item.name }}
        </span>
        <span id="name_rus">
          {{ item.name_rus }}
        </span>
<!--        <span id="body">-->
<!--          {{ item.body }}-->
<!--        </span>-->
<!--        <span id="body_rus">-->
<!--          {{ item.body_rus }}-->
<!--        </span>-->
      </div>
    </div>
  </div>
  <div class="loading" v-else>Идет загрузка...</div>
</template>

<script>
import termsAPI from "@/services/termsAPI";
export default {
  name: "EnTerm",
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
          await termsAPI.getTermsList('eng', this.page))).rows]
      console.log('+')
      this.isItemsLoading = false
    },
    async append() {
      this.page++
      const buffer = [...JSON.parse(JSON.stringify(
          await termsAPI.getTermsList('eng', this.page))).rows]
      for(let item of buffer) {
        this.items.push(item)
      }
    },
    async scroll() {
      const itemsList = document.querySelector('.list')
      itemsList.addEventListener('scroll', async () => {
        if (itemsList.scrollTop + itemsList.clientHeight >= itemsList.scrollHeight) {
          await this.append()
        }
      })
    }
  },
  async mounted() {
    await this.fetch()
    await this.scroll()
  }
}
</script>

<style scoped>

.my-input-search {
  margin-top: 15px;
  width: 80%;
}
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
  flex: 2;
}
.loading {
  flex: 1
}
</style>