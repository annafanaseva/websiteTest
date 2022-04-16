<template>
<div class="wrapper">
  <div class="input__wrapper">
    <div class="input">
      <p>Добавить заголовок</p>
      <input v-model="titleNew" type="text">
    </div>

    <div class="input">
      <p>Добавить текст</p>
      <input v-model="textNew" type="text">
      <p>{{textNew}}</p>
    </div>

    <div class="input">
      <p>Добавить цену</p>
      <input v-model="priceNew" type="text">
    </div>

    <div class="basket">
      <p>Корзина:</p>
      <img src="../assets/basket.png" />
      <p></p>
    </div>
  </div>

  <h2>Добавить карточку</h2>

  <div @click="addCard" class="plus">
    <img src="../assets/plus.png">
  </div>

  <div class="count-card">
    <p>Всего карточек: {{items.length}}</p>
  </div>

  <div class="card">
    <app-card :countPrice='basketSum' :title="item.title" :text="item.text" :price="item.price" v-for="(item, i) in items" :key="i" @deleteCard="deleteCard(i)"></app-card>
  </div>
  <div class="basket__wrapper">
    <h2>Корзина: </h2>
    <h3>Товары на сумму: </h3>
  </div>
</div>
</template>

<script>
import AppCard from "./AppCard.vue"

export default {
  name: 'CardWrapper',
  components: {
    AppCard 
  },
  data(){
    return{
    items: [
      {title:"title1", price:'1000', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida1"},
      {title:"title2", price:'2000', text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida2"}
    ],
    titleNew: '',
    textNew: '',
    }
  },
  props: {
    msg: String
  },
  methods: {
    addCard() {
      this.items.push({title: this.titleNew, text: this.textNew, price: this.priceNew});
    },
    deleteCard(i) {
      this.items.splice(i, 1);
    },
    basketSum(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.plus{
  width: 40px;
  margin: 50px auto;
  background-color: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
.input__wrapper{
  display: flex;
  justify-content: center;
  .input{
    margin: 20px;
    input{
        background-color: #FFF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
    }
  }
  .basket{
    margin: 20px 70px;
    width: 24px;
  }
}
h2{
  text-align: center;
}
.count-card{
  text-align:center;
}
</style>
