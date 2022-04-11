<template>
  <div class="formulas-title"><p>Посмотрите видео-материал и выполните задание.</p></div>
  <div class="video">
    <iframe width="324" height="210" src="https://www.youtube.com/embed/JDL0ZU6eBJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="pdf">
    <iframe src="https://drive.google.com/file/d/18ndJbKMuQU-Gyc2WJktHwNBEBVHOI0Fk/preview" width="800" height="280" allow="autoplay"></iframe>
  </div>
</template>

<script>
export default {
  name: "UdelSopr",
}
</script>

<style scoped>
.formulas-title {
  margin-top: 20px;
  font-family: HSE Sans,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: black;
}
.video {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.pdf {
}
</style>