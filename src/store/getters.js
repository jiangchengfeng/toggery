export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartTotal(state){
    return state.cartList.reduce((pre, item) => { return pre + item.count }, 0)
  },
  cartList(state) {
    return state.cartList
  },
  cartCount(state) {
    return state.cartList.filter(item => item.checked).reduce((pre, item) => { return pre + item.count }, 0)
  },
  cartPrice(state) {
    return "￥" + state.cartList.filter(item => item.checked).reduce((pre, item) => { return pre + item.realPrice * item.count }, 0).toFixed(2)
  },
  cartSelectAll(state) {
    if ( state.cartList.length === 0) return false;
    // return !(this.cartList.filter(item => !item.checked).length)
    return !state.cartList.find(item => !item.checked);
  }
}