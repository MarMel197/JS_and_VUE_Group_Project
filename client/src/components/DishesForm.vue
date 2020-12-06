<template lang="html">
	<form id="dishes-form" v-on:submit.prevent="handleSubmit">
		<h2>Add a Dish</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="description">Description:</label>
			<input type="text" id="description" v-model="description" />
		</div>
		<div class="formWrap">
			<label for="origin">Origin:</label>
			<input type="text" id="origin" v-model="origin" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';

export default {
	name: 'dishes-form',
	data() {
		return {
			name: '',
			description: '',
			origin: ''
		}
	},
	methods: {
		handleSubmit() {
			const payload = {
				name: this.name,
				description: this.description,
				origin: this.origin
			};

			eventBus.$emit('submit-dish', payload);
			this.name = this.description = this.origin = ''
		}
	}
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>