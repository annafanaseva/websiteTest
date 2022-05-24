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
              >Add id
              <input v-model="idNew" type="text" />
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

    <div class="count-card">
      <p>Всего карточек: {{ items.length }}</p>
    </div>
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
    <div class="basket-wrapper">
      <h2 class="title">Cart:</h2>
      <!-- <div v-html="cartList"></div> -->
      <div class="basket-cards">
        <div class="basket-card" v-for="el in cart" :key="el.id">
          <div class="basket-card__title">Name: {{ el.title }}</div>
          <div class="basket-card__amount">Amount: {{ el.amount }}</div>
          <div class="basket-card__price">Price: {{ el.price }}</div>
          <div class="basket-card__total">
            Total price: {{ el.price * el.amount }}
          </div>
        </div>
      </div>
      <div v-if="Object.keys(this.cart).length == 0">Ampty</div>
      <button class="basket-button">Calculate total price</button>
      <div>
        <ul>
          <li v-for="el in cart[items.id]" :key="el.title">
            {{ el.title }}
          </li>
        </ul>
      </div>
      <h3 class="title">Total price:</h3>
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
          id: 1,
          title: "Title",
          price: 1000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida1",
        },
        {
          id: 2,
          title: "Title",
          price: 2000,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend lorem elit, vitae tristique mi dictum sagittis. Aliquam egestas arcu ac nisl convallis, sit amet maximus quam gravida2",
        },
      ],
      titleNew: "",
      textNew: "",
      priceNew: "",
      idNew: "",
      cart: {},
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
        id: this.idNew,
      });
    },
    deleteCard(i) {
      this.items.splice(i, 1);
    },
    basketSum(data) {
      console.log(data);
    },
    updateCart(item, amount) {
      this.cart[item.id] = {
        id: item.id,
        title: item.title,
        price: item.price,
        amount: amount,
      };
      console.log(this.cart);
    },
    totalSum(price, amount) {
    let sum;
    sum = sum + price * amount;
    // return totalPrice;
    console.log(1);
    console.log(sum);
    },
  },
  computed: {
    // cartList() {
    //   // if (Object.keys(this.cart).length === 0) {
    //   //   return "Ampty";
    //   // }
    //   let result = "";
    //   this.cart.forEach((element) => {
    //     result =
    //       result +
    //       element.title +
    //       " " +
    //       element.amount +
    //       " x " +
    //       element.price +
    //       "<br>";
    //   });
    //   return result;
    // },
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
      padding-left: 10px;
      color: #f24e1e;
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
    cursor: pointer;
  }
}

.title {
  font-size: 24px;
  color: #f24e1e;
  margin: 20px 0;
}
.basket {
  &-wrapper {
  }
  &-cards {
    display: flex;
    justify-content: center;
  }
  &-card {
    border: 1px solid #f8b3b8;
    border-radius: 15px;
    max-width: 200px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 10px;
  }
  &-button {
    margin-top: 20px;
    background: #f8b3b8;
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
