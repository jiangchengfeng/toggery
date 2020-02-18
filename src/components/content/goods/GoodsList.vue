<template>
  <div class="goods">
    <goods-list-item 
    v-for="(item,i) in goods" :key="i"
    :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    margin-bottom: 40px
  }

</style>