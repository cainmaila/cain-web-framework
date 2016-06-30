/**
 * component版型
 */

<style lage="less" scoped>
	h2{
		color: #ff0000;
	}
</style>

<template>
	<div :id="idName">
		<h2>{{idName}}!!</h2>
		<v-alert type="info" show="true">this is <strong>vue-strap</strong> Alert!!</v-alert>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				idName: 'mycomponent_1',
			}
		}
	}
</script>