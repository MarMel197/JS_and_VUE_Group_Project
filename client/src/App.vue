<template>
  
</template>

<script>

import RegionList from "./components/RegionList.vue" 
import RegionSelect from "./components/RegionSelect.vue" 
import RegionDetail from "./components/RegionDetail.vue" 
import FoodList from "./components/FoodList.vue" 
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
    }
    
}
</script>

<style>

</style>
