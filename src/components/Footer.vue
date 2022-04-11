<template>
  <footer>
    <div id="myFootnav" class="footnav">
      <a href="https://cabinet.miem.hse.ru/#/project/218/" id="footer">Разработан в рамках проекта №218</a>
<!--      <p><a href="https://cabinet.miem.hse.ru/#/project/218/" style="color: #102d69">Разработан в рамках проекта №218</a></p>-->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#myFootnav a {
  position: absolute; /* Position them relative to the browser window */
  bottom: -45px; /* Position them outside of the screen */
  left: 0;
  transition: 0.3s; /* Add transition on hover */
  padding: 15px; /* 15px padding */
  width: 100%; /* Set a specific width */
  text-decoration: none; /* Remove underline */
  font-size: 20px; /* Increase font size */
  color: #102d69; /* White text color */
  text-align: center;
  border-radius: 5px 5px 0 0; /* Rounded corners on the top right and bottom right side */
  cursor: pointer;
}
#myFootnav a:hover {
  bottom: 0; /* On mouse-over, make the elements appear as they should */
}
#footer{
  /*bottom: 10px;*/
  background-color: #C9E6FA; /* Light Black */
}

</style>