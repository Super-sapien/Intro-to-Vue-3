const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          stock: 4,
          inStock: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          stock: 1,
          inStock: true,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
      this.variants.stock -= 1;
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
        this.variants.stock += 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    checkStock(variantStock) {
      if (variantStock == 0) {
        inStock = false;
      } else {
        inStock = true;
      }
    },
  },
});
