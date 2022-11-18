<template>
	<div>
		<div class="bar">
			<div class="bar__infor">
				<div class="bar__infor__header">
					<div class="bar__infor__header__img">
						<img src="@/assets/u165.svg" alt="">
						<p>aaa@qq.com</p>
					</div>

					<div class="bar__infor__header__poin">
						<p>ポイント数：</p>
						<p>34333</p>
					</div>

					<div class="bar__infor__header__">

					</div>
				</div>
			</div>
			<div class="bar__menu" v-for="(item, index) in categories" :key="index">
				<a href="#" class="button" :class="{ active: isActive(item.value) }" @click="goRouter(item.value, item.url)">
					{{ item.name }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeItem: 0,
			categories: [
				{
					name: 'アカウント詳細情報',
					value: 0,
					url: ''
				},
				{
					name: 'SIM購入',
					value: 1,
					url: ''
				},
				{
					name: 'WIFI購入',
					value: 2,
					url: ''
				},
				{
					name: '光購入',
					value: 3,
					url: ''
				},
				{
					name: 'その他商品購入',
					value: 4,
					url: ''
				},
				{
					name: 'ショッピングカート',
					value: 5,
					url: ''
				},
				
			],
		}

	},
	methods: {
		isActive: function (menuItem) {
			return this.activeItem === menuItem;
		},
		goRouter: function (menuItem, url) {
			this.activeItem = menuItem;		
			this.$router.push({
				path: url,
			});
		},
	}
}
</script>

<style lang="scss" scoped>
	.active {
		color: #F35F0D;
	}
	.bar{
		box-shadow: 5px 0 5px -5px #333;
	}
</style>