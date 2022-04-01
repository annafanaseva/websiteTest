<template>
  <div class="card">
    <div class="card__background">
      <div class="icon__wrapper">
        <img src="../assets/card-logo.png" />
      </div>
      <div class="card__info">
        <h2>{{title}}</h2>
        <p>{{text}}</p>
      </div>
      <div @click="$emit('deleteCard')" class="cross">
        <img src="../assets/cross.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  data() {
    return{
      hi: "Привет"
    }
  },
  props: ['title', 'text']
}
</script>


<style lang="scss" scoped>

.card{
  background-color: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 1500px;
  margin: 40px auto;
  padding: 10px;
  .card__background{
    display: flex;
    align-items: center;
    .icon__wrapper{
      width: 400px;
    }
    .card__info{
      h2{
        font-size: 18px;
        text-align: left;
      }
      p{
        font-size: 16px;
        text-align: left;
        
      }
    }
    .cross{
      margin: 0 40px;
      width: 70px;
    }
  }
}

</style>
