<template lang="html">
	<form id="sightings-form" v-on:submit.prevent="handleSubmit">
		<h2>Add a Sighting</h2>
		<div class="formWrap">
			<label for="species">Species:</label>
			<input type="text" id="species" v-model="species" />
		</div>
		<div class="formWrap">
			<label for="location">Location:</label>
			<input type="text" id="location" v-model="location" />
		</div>
		<div class="formWrap">
			<label for="date">Date:</label>
			<input type="date" id="date" v-model="date" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';

export default {
	name: 'sightings-form',
	data() {
		return {
			species: '',
			location: '',
			date: null
		}
	},
	methods: {
		handleSubmit() {
			const payload = {
				species: this.species,
				location: this.location,
				date: this.date
			};

			eventBus.$emit('submit-sighting', payload);
			this.species = this.location = '';
			this.date = null;
		}
	}
}
</script>
