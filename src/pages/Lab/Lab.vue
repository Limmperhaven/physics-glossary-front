<template>
  <div class="formulas-title"><p>Лабораторный практикум по физике</p></div>
  <div class="formulas-list-container">
    <ul class="list-group list-group-flush" style="font-size: 20px">
      <li class="list-group-item" @click="this.$router.push('/Lab/ParProv')">Параллельное соединение проводников</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/PoslProv')">Последовательное соединение проводников</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/MasVozd')">Оценка массы воздуха</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/OtnVlazh')">Относительная влажность воздуха</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/MoshnLamp')">Измерение мощности лампы</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/OprEDS')">Определение ЭДС</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/UdelSopr')">Удельное сопротивление проводника</li>
      <li class="list-group-item" @click="this.$router.push('/Lab/DifrResh')">Дифракционная решётка</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lab",
}
</script>

<style scoped>
.formulas-title {
  margin-top: 20px;
  font-family: HSE Sans,serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: black;
}
.formulas-list-container {
  cursor: pointer;
  margin-top: 10px;
  width: 80%;
  position: center;
}
</style>