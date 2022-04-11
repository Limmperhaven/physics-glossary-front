<template>
  <div class="formulas-title"><p>Fórmulas físicas</p></div>
  <div class="formulas-list-container">
    <ul class="list-group list-group-flush" style="font-size: 20px">
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormKin')">Cinemática</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormEnerg')">Energía</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormForc')">Fuerza</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormMolec')">Física Molecular</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormTherm')">Termodinámica</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormElstat')">Electrostática</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormDC')">DC Laws</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormEldyn')">Electrodinámica</li>
      <li class="list-group-item" @click="this.$router.push('/Es/EsForm/EsFormOpt')">Óptica</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EsForm",
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