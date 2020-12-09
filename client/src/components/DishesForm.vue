<template lang="html">
	<form id="dishes-form" v-on:submit.prevent="handleSubmit">
		<h2>Add your own dish!</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="description">Description:</label>
			<input type="text" id="description" v-model="description" />
		</div>
		<div class="formWrap">
			<label for="region">Region:</label>
			<select name="region" id="region" v-model="region">
				<option disabled value="">Select a region</option>
				<option value="gb-sct">Scotland</option>
				<option value="gb-eng">England</option>
				<option value="gb-nir">N. Ireland</option>
				<option value="gb-wls">Wales</option>
			</select>
			<!-- <input type="text" id="region" v-model="region" /> -->
		</div>
		<div class="formWrap">
			<label for="image">Image URL:</label>
			<input type="text" id="image" v-model="image_url" />
		</div>
		<input class="submitbutton" type="submit" value="Save" id="save"/>
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
			region: '',
			image_url: ''
		}
	},
	methods: {
		handleSubmit() {
			const payload = {
				name: this.name,
				description: this.description,
				region: this.region,
				image_url: this.image_url
			};

			eventBus.$emit('submit-dish', payload);
			this.name = this.description = this.region = this.image_url = ''
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
	display: flex;
	justify-content: space-evenly;
	width: 60%;
	margin: 0 auto;
	background: rgba(175, 220, 255, 0.392);
	padding: 20px;
	margin-bottom: 0px;
	align-items: center;
	border-radius: 5px;
}

.submitbutton {
	font-family: 'Schoolbell', cursive;
	color: #fff;
	border: none;
	font-size: 16px;
	padding: 8px;
	margin-top: 10px;
	background: #2c9609;
	border-radius: 5px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>