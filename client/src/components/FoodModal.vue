<template >
<modal class="modal" name="food-modal-example" :min-height="200"
    :min-width="200"
    :scrollable="true"
    :reset="true"
    width="40%"
    height="auto"
    styles="font-style: italic;">

    <div class="modal" >
        <h2>{{selectedDish.name}}</h2>
        <p><b>Description:</b> {{selectedDish.description}}</p>
        <p><b>Region:</b> {{selectedDish.origin}}</p>
        <img class="image" :src="selectedDish.image_url "/>
        <br>
        <button id="delete-button" v-on:click="handleDelete(selectedDish._id)">Delete dish</button>
    </div>

</modal>


</template>

<script>
import VModal from 'vue-js-modal';
import { eventBus } from "../main";

export default {
    name: 'food-modal',
    props: ['selectedDish'],

    methods: {
    handleDelete(id) {
      eventBus.$emit('delete-dish', id);
    },
    

}}
</script>

<style>
.image {
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.modal {
    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    line-height: 1.5;
    overflow: auto;
    /* max-height: calc(100vh - 200px); */
    /* overflow-y: auto; */
}

button {
    font-family: 'Schoolbell', cursive;
	color: #fff;
	border: none;
	font-size: 14px;
	padding: 5px;
	margin-top: 10px;
	background: #F55536;
    border-radius: 5px;
}

#delete-button {
    margin-left: auto;
    margin-right: auto;
    display: block;
}





</style>