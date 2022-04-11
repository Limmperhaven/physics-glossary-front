<template>
  <div v-if="!no_tasks" class="wrapper">
    <span class="title">Задачи по разделу “Механика”</span>
    <div class="task" v-if="!isTasksLoading">
      <div class="task-header">
        <div class="task-num">Задание №{{folTaskNumber + 1}}</div>
        <p class="task-text">{{folTask.text}}</p>
      </div>
      <div class="task-options">
        <div class="answers">
          <div class="answer" v-for="ans in folTask.answers" :key="ans">
            <input type="radio" :id="ans" :value="ans" v-model="selectedAnswer">
            <label :for="ans">{{ans}}</label>
          </div>
        </div>
        <button class="check" @click="checkAnswer">Отправить</button>
      </div>
      <span class="verdict">{{verdict}}</span>
    </div>
    <div v-else class="loading">Идет загрузка...</div>
  </div>
  <div v-else class="no-left">
    Заданий больше нет, но мы над этим работаем :)
  </div>
</template>

<script>
import tasksAPI from "@/services/tasksAPI";

export default {
  name: "TasksMech",
  data() {
    return {
      tasks: [],
      isTasksLoading: false,
      folTaskNumber: 0,
      folTask: {},
      selectedAnswer: '',
      verdict: '',
      no_tasks: false
    }
  },
  methods: {
    async fetch() {
      this.isTasksLoading = true
      this.tasks = [...JSON.parse(JSON.stringify(
          await tasksAPI.getTasksList())).rows]
      this.isTasksLoading = false
    },
    checkAnswer() {
      if(this.selectedAnswer === this.folTask.right_answer) {
        this.verdict = ''
        this.selectedAnswer = ''
        this.nextTask()
      } else {
        this.verdict = 'Неверно! Попробуй ещё раз'
      }
    },
    nextTask() {
      this.folTaskNumber++
      this.checkTasks()
      this.folTask = this.tasks[this.folTaskNumber]
    },
    checkTasks() {
      if(this.folTaskNumber === this.tasks.length) {
        this.no_tasks = true
      }
    }
  },
  async mounted() {
    await this.fetch()
    this.checkTasks()
    this.folTask = this.tasks[0]
  }
}
</script>

<style scoped>
.wrapper {
  width: calc(1200%/1440*100);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*border: 2px solid black;*/
}
.title {
  font-size: 48px;
  margin-top: 15px;
}
.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}
.task-header {
  margin-top: 25px;
  width: 100%;
  font-size: 24px;
}
.task-num {
  font-weight: bold;
}
.task-text {
  margin-top: 5px;
}
.task-options {
  width: 100%;
  height: 150px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*border: 1px solid black;*/
}
.answers {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  font-size: 24px;
}
.answer {
  display: flex;
  align-items: center;
}
.answer label {
  margin-left: 10px;
}
.verdict {
  color: red;
  font-size: 32px;
  font-weight: bold;
  margin-top: 25px;
}
.task-options button {
  width: 171px;
  height: 51px;
  border-radius: 10px;
  background: #6C7A89;
  font-size: 24px;
  color: #FFFFFF;
  border: 0;
  align-self: flex-end;
}
.no-left {
  margin-top: 50px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  flex: 1;
}
</style>