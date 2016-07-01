<style lang="less">
	h2{
		color:#f00;
	}
</style>

<template>
  <h2>{{msg}}</h2>
  <h3>{{count}}</h3>
  <input type="text" v-model="addNum">
  <input type="button" value="按我加{{addNum}}" @click="addCoolies(addNum*1)">
</template>


<script>
import { addCoolies} from '../actions.js'
export default {
  data(){
    return {
      msg: '測試成功 Componect Test!!',
      addNum:0
    }
  },
  vuex:{
	 getters:{
	 	count: state => state.count
	 },
	 actions:{
	 	addCoolies
	 }
  }
}
</script>
