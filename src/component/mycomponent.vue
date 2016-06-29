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