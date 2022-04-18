<template>
  <div class="card">
    <div class="card__background">
      <div class="icon__wrapper">
        <img src="../assets/card-logo.png" />
      </div>
      <div class="card__info">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
        <p>Цена за один товар: {{ item.price }}$</p>
        <p>Итоговая стомость: {{ getTotalPrice }}$</p>
      </div>

      <div class="basket__info">

        <input type="text" v-model="amount">
        <img src="../assets/basket.png" @click='addToCart(amount)'>

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
      totalPrice: 0,
      amount: 0,
    }
  },
  methods:{
      addToCart (amount) {
        this.$emit('addToCart', this.item, amount)
      }
  },
  computed: {
    getTotalPrice() {
        return this.amount * this.item.price
    }
  },
  props: ['item', 'basketSum']
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
