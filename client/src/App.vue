<template>
<div class="body">
    <header class="header">British Best Bites</header>
    <div class="main-container">
    <label for="food-select">Pick a food:</label>
    <select id="food-select" v-model="selectedFood">
      <option disabled value="">Select a food</option>
      <option v-for="food in foods" :key="food.id" :value="food" >{{food.name}}</option>
    </select>
    </div>
</div>
</template>

<script>

import RegionList from "./components/RegionsList.vue" 
import RegionSelect from "./components/RegionSelect.vue" 
import RegionDetail from "./components/RegionDetail.vue" 
import FoodList from "./components/FoodsList.vue" 
import FoodDetail from "./components/FoodDetail.vue" 
import FoodSelect from "./components/FoodSelect.vue" 
import { eventBus } from './main.js';

export default {
    name: "app",
    data() {
        return{
            foods: [],
            selectedFood: null,
            regions: [],
            selectedRegion: null
        }
    },
    components: {
        "region-list": RegionList,
        "region-select": RegionSelect,
        "region-detail": RegionDetail,
        "food-list": FoodList,
        "food-detail": FoodDetail,
        "food-select": FoodSelect
    },
    mounted(){
        this.fetchFoods();

        eventBus.$on('add-food', (food) => {
        FoodService.addFood(food)
        .then(foodWithId => this.foods.push(foodWithId));
    });

        eventBus.$on('delete-food', (id) => {
        FoodService.deleteFood(id);
        const index = this.foods.findIndex(food => food._id === id);
        this.foods.splice(index, 1);
    });
    }
    
}
</script>

<style>

</style>
