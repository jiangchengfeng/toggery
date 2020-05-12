import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中的状态 
  // mutations中的每个方法尽可能完成的事件比较单一
  // addCart(state,payload){
  //   let oldProduct = state.cartList.find(item=>item.iid===payload.iid)
  //   if(oldProduct){
  //     oldProduct.count +=1
  //   }else{
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  },
  checkeAllClick(state, payload) {
    if (payload) {
      state.cartList.forEach(item => (item.checked = false));
    } else {
      state.cartList.forEach(item => (item.checked = true));
    }
  },
  checkClick(state,payload){
    payload.checked = !payload.checked;
  }
}