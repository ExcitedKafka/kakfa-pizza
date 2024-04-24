import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //用push
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //用filter
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //用find 先拿到这个item
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //同上
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }

      //如果item.quantity减至0 则调用deleteItem删除cart中的这个项目
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) =>
  //返回所选id的项目的quantity
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
