<template>
	<div class="">
		<header-app :key="$route.fullPath"/>
		<router-view class="view"></router-view>
		<footer-app />
	</div>
</template>
<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";



export default {
	name: "main",
	components: {
		"header-app": Header,
		"footer-app": Footer,
	},
	data() {
		return {
		};
	},
	
};
</script>
<style lang="scss" scoped>
.view {
	margin-top: 80px;
}
@media (max-width: 960px) {
	.view {
	margin-top: 60px;
}
  }
</style>


