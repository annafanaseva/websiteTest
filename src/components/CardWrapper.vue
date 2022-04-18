<template>
  <div class="wrapper">
    <div class="form-box">
      <div class="form">
        <div class="form__title">Add card</div>
        <div class="form__wrapper">
          <div class="form__input">
            <label
              >Add title
              <input v-model="titleNew" type="text" />
            </label>
          </div>

          <div class="form__input">
            <label
              >Add text
              <input v-model="textNew" type="text" />
            </label>
          </div>

          <div class="form__input">
            <label
              >Add price
              <input v-model="priceNew" type="text" />
            </label>
          </div>
        </div>

        <div @click="addCard" class="form__plus">Add card</div>
      </div>

      <div class="form-box__image">
        <img src="../assets/image2.svg" />
      </div>
    </div>

    <!-- <div class="count-card">
      <p>Всего карточек: {{ items.length }}</p>
    </div> -->

    <div class="card">
      <app-card
        v-for="(item, i) in items"
        :countPrice="basketSum"
        :item="item"
        :key="i"
        @deleteCard="deleteCard(i)"
        @addToCart="updateCart"
      ></app-card>
    </div>
    <div class="basket__wrapper">
      <h2>Cart:</h2>
      <div v-html="cartList"></div>
      <h3>Total price:</h3>
    </div>
  </div>
</template>

<script>
import AppCard from "./AppCard.vue";

export default {
  name: "CardWrapper",
  components: {
    AppCard,
  },
  data() {
    return {
      items: [
        {
          title: "Title",
          price: 1000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida1",
        },
        {
          title: "Title",
          price: 2000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida2",
        },
      ],
      titleNew: "",
      textNew: "",
      cart: [
        { title: "title1", price: 2000, amount: 2 },
        { title: "title2", price: 1000, amount: 1 },
        { title: "title1", price: 2000, amount: 1 },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    addCard() {
      this.items.push({
        title: this.titleNew,
        text: this.textNew,
        price: this.priceNew,
      });
    },
    deleteCard(i) {
      this.items.splice(i, 1);
    },
    basketSum(data) {
      console.log(data);
    },
    updateCart(item, amount) {
      this.cart.push({
        title: item.title,
        price: item.price,
        amount: amount,
      });
    },
  },
  computed: {
    cartList() {
      if (this.cart.length === 0) {
        return "Нет товаров";
      }

      let result = "";

      this.cart.forEach((element) => {
        result =
          result +
          element.title +
          " " +
          element.amount +
          " x " +
          element.price +
          "<br>";
      });

      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 300px;
  background-color: #f8b3b8;
  padding: 10px;

  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 600px;
    margin: 30px auto;
    &__image {
      width: 280px;
    }
  }
  &__title {
    font-size: 24px;
    color: #fff;
    margin: 20px 0;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
  }
  &__input {
    margin-top: 10px;
    color: #fff;
    input {
      margin-left: 10px;
      height: 30px;
      border: 1px solid #f24e1e;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
    }
  }
  &__plus {
    padding: 10px 15px 10px 15px;
    background: #f24e1e;
    border-radius: 15px;
    color: #fff;
    margin: 24px auto;
    width: 210px;
    box-shadow: 0px 6px 10px rgba(#f24e1e, 0.4);
  }
}
</style>
