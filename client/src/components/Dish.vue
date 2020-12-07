<template lang="html">
  <div class="dish">
    <h2>{{ dish.name }}</h2>
    <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <p><i><b>See Info</b></i></p>
      <span v-if="hover">{{dish.description}} <p><p>{{ dish.origin }}</p><img class="image" :src="dish.image_url "/> </p></span>
    </span>

  
    
    <button v-on:click="handleDelete(dish._id)">Delete dish</button>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  name: "dish",
  props: ["dish"],
//   filters: {
//     formatDate(value) {
//       return new Date(value).toLocaleString().substring(0, 10);
//     }
//   },
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
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}

h2 {
	padding: 0;
	margin: 0;
} 

.image {
  height: 100px;
}
</style>