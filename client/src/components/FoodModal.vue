<template >
<modal class="modal" name="food-modal-example" :min-width="200"
    :min-height="200"
    :resizable="true"
    styles="font-style: italic;">

    <div class="modal" >
        <h2>{{selectedDish.name}}</h2>
        <p><b>Description:</b> {{selectedDish.description}}</p>
        <p><b>Region:</b> {{selectedDish.origin}}</p>
        <img class="image" :src="selectedDish.image_url "/>
        <br>
        <button v-on:click="handleDelete(selectedDish._id)">Delete dish</button>
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
  height: 100px;
}

.modal {
    box-sizing: border-box;
    padding: 10px;
    font-size: 13px;
    line-height: 1.5;
    overflow: auto;
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





</style>