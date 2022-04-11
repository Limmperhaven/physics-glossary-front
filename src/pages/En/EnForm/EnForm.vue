<template>
  <div class="formulas-title"><p>Physical formulas</p></div>
  <div class="formulas-list-container">
    <ul class="list-group list-group-flush" style="font-size: 20px">
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormKin')">Kinematics</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormEnerg')">Energy</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormForc')">Force</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormMolec')">Molecular physics</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormTherm')">Thermodynamics</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormElstat')">Electrostatics</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormDC')">DC Laws</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormEldyn')">Electrodynamics</li>
      <li class="list-group-item" @click="this.$router.push('/En/EnForm/EnFormOpt')">Optics</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EnForm",
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