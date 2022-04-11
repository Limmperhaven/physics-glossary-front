<template>
<!--    <div class="img">-->
<!--    <a href="https://miem.hse.ru"><img src="@/assets/pictures/miemlogo.svg" alt="MIEM Logo"></a>-->
<!--    <a href="https://www.hse.ru"><img src="@/assets/pictures/logo.svg" alt="HSE Logo"></a>-->
<!--    </div>-->
<!--    <span class="name">Глоссарий по физике</span>-->
  <div class="my-header-container">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #C9E6FA;">
    <div class="container-fluid">
      <div class="my-hselogo">
      <a href="https://www.hse.ru"><img src="@/assets/pictures/hselogo.svg" alt="HSE Logo" style="height: 50px; width: 150px"></a>
      </div>
      <div class="my-miemlogo">
      <a href="https://miem.hse.ru"><img src="@/assets/pictures/miemlogo.svg" alt="MIEM Logo" style="height: 50px; width: 150px"></a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<!--          <li class="nav-item">-->
<!--            <a class="nav-link active my-home-click" aria-current="page" @click="this.$router.push('/')" style="color: #102d69">Home</a>-->
<!--          </li>-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: #102d69">
              Select language
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">English</a></li>
              <li><a class="dropdown-item" href="#">العربية</a></li>
              <li><a class="dropdown-item" href="#">Español</a></li>
              <li><a class="dropdown-item" href="#">中文</a></li>
              <li><a class="dropdown-item" href="#">Français</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2 my-search-panel" type="search" placeholder="What do you want to learn?" aria-label="Search">
          <button type="button" class="btn btn-primary my-button"><img src="@/assets/pictures/lupa.svg" style="height: 30px; width: 30px;"></button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  <div class="my-second-header">
<!--    <input type="button" onclick="history.back();" value="<< Back" style="border: none; background-color: #E5F3FD; float: left"/>-->
    <span class="name">Physics glossary</span>
  </div>
  <div id="mySidenav" class="sidenav">
    <a @click="this.$router.push('/')" id="home">Home</a>
    <a onclick="history.back()" id="back">&laquo;Back</a>
    <a @click="this.$router.push('/En')" id="en">English</a>
    <a @click="this.$router.push('/Ar')" id="ar">العربية</a>
    <a @click="this.$router.push('/Es')" id="es">Español</a>
    <a @click="this.$router.push('/Ch')" id="ch">中文</a>
    <a @click="this.$router.push('/Fr')" id="fr">Français</a>
  </div>

</template>

<script>
export default {
  name: "HeaderSearch"
}
</script>

<style scoped>
.my-header-container {
  width: 100%;
}
.my-hselogo {
  width: 180px;
}
.my-miemlogo {
  width: 180px;
}
.my-button {
  color: #102d69;
  width: 60px;
  height: 40px;
}
.my-search-panel {
  width: 400px;
}
.my-home-click {
  cursor: pointer;
}
.my-second-header {
  background-color: #E5F3FD;
  width: 100%;
  text-align: center;
}
.my-back-button {
  vertical-align: center;
}
.name {
  font-family: HSE Sans,serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #102d69;
}
#mySidenav a {
  position: absolute; /* Position them relative to the browser window */
  left: -90px; /* Position them outside of the screen */
  transition: 0.3s; /* Add transition on hover */
  padding: 15px; /* 15px padding */
  width: 110px; /* Set a specific width */
  text-decoration: none; /* Remove underline */
  font-size: 20px; /* Increase font size */
  color: white; /* White text color */
  border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */
  cursor: pointer;
}
#mySidenav a:hover {
  left: 0; /* On mouse-over, make the elements appear as they should */
}
#home {
  top: 150px;
  background-color: #555 /* Light Black */
}
#back {
  top: 220px;
  background-color: #0d6efd;
}
#en {
  top: 360px;
  background-color: #C9E3E3;
}
#ar {
  top: 420px;
  background-color: #BCDFDF;
}
#es {
  top: 480px;
  background-color: #95C3C3;
}
#ch {
  top: 540px;
  background-color: #74AFAF;
}
#fr {
  top: 600px;
  background-color: #448B8B;
}

</style>