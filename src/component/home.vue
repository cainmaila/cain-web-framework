/**
 * Home版型
 */

<style lage="less" scoped>

</style>

<template>
	<div :id="idName">
		<h1>{{idName}}!!</h1>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				idName: 'home',
			}
		}
	}
</script>