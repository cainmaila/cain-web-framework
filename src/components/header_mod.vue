/**
 * Header版型
 */

<style lage="less" scoped>

</style>

<template>
	<header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <navbar>
                <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a v-link="{name:'home'}" class="navbar-brand">Home</a>
                <nav id="bs-navbar" class="collapse navbar-collapse" slot="dropdown-menu">
                    <ul class="nav navbar-nav">
                        <li><a v-link="{name:'page1'}">Page1</a></li>
                        <li><a v-link="{name:'page2'}">Page2</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Link1</a></li>
                        <li><a href="#">Link2</a></li>
                    </ul>
                </nav>
            </navbar>
        </div>
        
    </header>
</template>

<script>
	export default {
		data: function () {
			return {
				
			}
		}
	}
</script>