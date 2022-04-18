<template>
<div id="wrapper">
  <div class="header">
    <div class="logo">
      <img src="./assets/logo.png" />
    </div>
    <div class="links__wrapper">
      <div class="link">Главная</div>
      <div class="link">О нас</div>
      <div class="link">Контакты</div>
      <div class="link">Услуги</div>
    </div>
  </div>
  <card-wrapper></card-wrapper>
</div>
</template>

<script>

import CardWrapper from "./components/CardWrapper.vue"
export default {
  name: 'App',
  components: {
    CardWrapper 
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img{
  width: 100%;
}

body{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  background-color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  .logo{
    max-width: 70px;
  }
  .links__wrapper{
    display: flex;
    .link{
      margin: 0 40px;
      font-size: 20px;
    }
  }
}
</style>
