<template>
  <div class="card">
    <div class="card__background">
      <div class="card__img">
        <img src="../assets/card-logo.png" />
      </div>
      <div class="card__info">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
        <p>Price for one: {{ item.price }}$</p>
        <p>Total price: {{ getTotalPrice }}$</p>
        <div @click="addToCart(amount)" class="card__button">Add to a cart</div>
      </div>

      <div class="basket__info">
        <p class="basket__label">Type the number</p>
        <input type="text" v-model="amount" />
      </div>

      <div @click="$emit('deleteCard')" class="cross">
        <img src="../assets/cross.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  data() {
    return {
      totalPrice: 0,
      amount: 0,
    };
  },
  methods: {
    addToCart(amount) {
      this.$emit("addToCart", this.item, amount);
    },
  },
  computed: {
    getTotalPrice() {
      return this.amount * this.item.price;
    },
  },
  props: ["item", "basketSum"],
};
</script>


<style lang="scss" scoped>

.card {
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 400px;
  margin: 40px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  &__background {
    display: flex;
    align-items: stretch;
  }
  &__img {
    display: flex;
    align-items: center;
  }
  &__info {
    max-width: 300px;
    h2 {
      font-size: 18px;
      text-align: left;
      color: #f24e1e;
    }
    p {
      font-size: 16px;
      text-align: left;
    }
  }
  &__button {
    padding: 10px 15px 10px 15px;
    background: #f24e1e;
    border-radius: 15px;
    color: #fff;
    box-shadow: 0px 6px 10px rgba(#f24e1e, 0.4);
  }
  .cross {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 20px;
  }
}

.basket {
  &__info {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    min-width: 60px;
    text-align: left;
    input {
      height: 30px;
      border: 1px solid #f24e1e;
      box-shadow: 0px 4px 8px rgba(#f24e1e, 0.2);
      border-radius: 15px;
      color: #f24e1e;
    }
    p {
      color: #f24e1e;
    }
  }
}
</style>
