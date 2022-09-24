<template>
	<div>
		<div class="banner">
		</div>
	</div>
</template>
<script >
 
export default {
	name: 'app',
	components: {
	},
	data() {
		return {
		}
	},
}
</script>
<style lang="scss" scoped>
.banner{
	background-image: url("@/assets/bannerPc.png");
	height: 500px;
	background-repeat: round;
}
@media(max-width: 600px){
	.banner{
		background-image: url("@/assets/bannerMobi.png");
		height: 245px;
	}
}
</style>