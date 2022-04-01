<template>
<div class="wrapper">
  <div @click="addCard" class="plus">
    <img src="../assets/plus.png">
  </div>
  <input v-model="titleNew" type="text">
  <input v-model="textNew" type="text">
  <div class="card">
    <app-card :title="item.title" :text="item.text" v-for="(item, i) in items" :key="i" @deleteCard="deleteCard(i)"></app-card>
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
      {title:"title1", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida1"},
      {title:"title2", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida2"}
    ],
    titleNew: '',
    textNew: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    addCard() {
      this.items.push({title: this.titleNew, text: this.textNew});
    },
    deleteCard(i) {
      this.items.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.plus{
  width: 50px;
  margin: 50px auto;
}
</style>
