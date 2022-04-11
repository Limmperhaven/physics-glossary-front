<template>
  <div class="formulas-title"><p>Formules physiques</p></div>
  <div class="formulas-list-container">
    <ul class="list-group list-group-flush" style="font-size: 20px">
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormKin')">Cinématique</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormEnerg')">Énergie</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormForc')">Force</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormMolec')">Physique moléculaire</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormTherm')">Thermodynamique</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormElstat')">Électrostatique</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormDC')">Lois DC</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormEldyn')">Électrodynamique</li>
      <li class="list-group-item" @click="this.$router.push('/Fr/FrForm/FrFormOpt')">Optique</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FrForm",
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