<template lang="html">
	<div id="dishesGrid">

			<dish v-for="dish, index in dishes" :key="index" :dish="dish" />

	</div>
</template>

<script>
import Dish from './Dish';

export default {
  name: 'dishes-grid',
  components: {
		'dish': Dish
	},
	props: ['dishes']
}
</script>

<style lang="css" scoped>
#dishesGrid {
	margin-top: 70px;
}
</style>