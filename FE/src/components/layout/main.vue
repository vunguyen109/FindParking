<template>
	<div class="">
		<header-app />
		<router-view></router-view>
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
	computed: {
	},
	watch: {

	},
	methods: {

		
	},
};
</script>


