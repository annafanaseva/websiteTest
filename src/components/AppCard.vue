<template>
  <div class="card">
    <div class="card__background">
      <div class="icon__wrapper">
        <img src="../assets/card-logo.png" />
      </div>
      <div class="card__info">
        <h2>{{title}}</h2>
        <p>{{text}}</p>
        <p>Цена за один товар: {{price}}$</p>
        <p>Итоговая стомость: {{totalPrice=calculate * price}}$</p>
      </div>
      
      <div class="basket__info">
      
        <input type="text" v-model="calculate">
        <img src="../assets/basket.png" @click='countPrice()'>

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
      totalPrice: '',
      calculate:'',
    }
  },
  methods:{
    countPrice () {
      this.basketSum( {
        totalPrice: this.totalPrice
      })
    }
  },
  props: ['title', 'text', 'price', 'busketSum']
}
</script>


<style lang="scss" scoped>

input{
  margin-left: 20px;
  width: 70px;
  background-color: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
.card{
  background-color: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 800px;
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
      margin: 0 10px 0 30px;
      width: 70px;
    }
  }
  .basket__info{
    display: flex;
    img{
      margin-left: 20px;
      width: 30px;
    }
  }
}


</style>
