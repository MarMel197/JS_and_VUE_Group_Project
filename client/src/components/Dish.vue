<template lang="html">
  <div class="dish">
    <button v-on:click="displayInfo(dish._id)">{{ dish.name }}</button>
    <!-- <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <p><i><b>See Info</b></i></p>
      <span v-if="hover">{{dish.description}} <p><p>{{ dish.origin }}</p><img class="image" :src="dish.image_url "/> </p></span>
    </span>
    <!-- new -->
    <!-- <button v-on:click="displayInfo(dish._id)">Display Info </button>

    <button v-on:click="handleDelete(dish._id)">Delete dish</button>  -->
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  name: "dish",
  props: ["dish"],

  data(){
  return {
    hover: false,
    }
  },
  methods: {
    handleDelete(id) {
      eventBus.$emit('delete-dish', id);
    },
    displayInfo: function() {
      eventBus.$emit('dish-selected', this.dish);
    }
  }
}
</script>

<style lang="css" scoped>
.dish {
	/* width: 50%; */
	margin-bottom: 5px;
	padding: 10px;
  border-radius: 5px;
}

button {
  font-family: 'Schoolbell', cursive;
	color: #fff;
	border: none;
	font-size: 16px;
	padding: 8px;
	margin-top: 10px;
	background: #214aeb;
  border-radius: 5px;
}

h2 {
	padding: 0;
	margin: 0;
} 

.image {
  height: 100px;
}
</style>