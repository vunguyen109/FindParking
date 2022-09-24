<template>
	<div class="">
		<header-app />
		<router-view></router-view>
		<footer-app />
	</div>
</template>
<script>
import Header from "@/components/common/Header";
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";



export default {
	name: "main",
	components: {
		"header-app": Header,
		"banner-app": Banner,
		"footer-app": Footer,
	},
	data() {
		return {

		};
	},
	computed: {
	},
	watch: {

	},
	methods: {

		
	},
};
</script>


