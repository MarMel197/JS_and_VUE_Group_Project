<template>
  <div id="app">
    <dishes-header title="Best British Bites!"/>
    <!-- <header class="header">Best British Bites!</header> -->
    <h3>Explore the best regional dishes in the UK and add your own!</h3>
    <dishes-form id="dishes-form"/>
    <br>
    <div id="chartgrid">
    <br>
    <chart id="uk" ></chart>
    <br>
    <dishes-grid :dishes="dishes"/>
    </div>
    <div id="modal-component">
      <food-modal v-if="selectedDish" :selectedDish="selectedDish"></food-modal>
      <!-- <button v-on:click="$modal.show('food-modal-example')">FOOD MODAL</button> -->
    </div>
    

  </div>
</template>

<script>
import { eventBus } from './main';
import DishesForm from './components/DishesForm';
import DishesGrid from './components/DishesGrid';
import Chart from "./components/Chart";
import FoodModal from "./components/FoodModal";
import DishesHeader from "@/components/DishesHeader";
import DishService from './services/DishService'



export default {
  name: 'app',
  components: {
    'dishes-header': DishesHeader,
    'dishes-form': DishesForm,
    'dishes-grid': DishesGrid,
    'chart': Chart,
    'food-modal': FoodModal
  },
  data() {
    return {
      data: [],
      dishes: [],
      selectedDish: null,
      point: {},

    };
  },
	mounted() {
    // this.fetchdishes();

    eventBus.$on('submit-dish', payload => {
      DishService.postDish(payload)
		.then(dish => this.dishes.push(dish));
    });

    eventBus.$on('delete-dish', id => {
      DishService.deleteDish(id)
        .then(() => {
          const index = this.dishes.findIndex(dish => dish._id === id);
          this.dishes.splice(index, 1);
          this.selectedDish = null
        });
    });

    eventBus.$on("region-selected", region_code => {
      console.log(region_code);
      DishService.getFilteredDishes(region_code)
        .then(dishes => this.dishes = dishes)
      });
    
    eventBus.$on("dish-selected", dish => {
      this.selectedDish = dish
      this.$modal.show('food-modal-example')
      
    });

  },
  methods: {
    
    // }
    // fetchdishes() {
    //   DishService.getDishes()
    //     .then((dishes) => {
    //       this.data = dishes
    //       });
    // },
    // filterFoodsByRegion(region) {
    //   const filteredFoods = this.data.filter(function(dish) {
    //     return dish.region === region
    //   });
    //   console.log(filteredFoods);
    //   this.dishes = filteredFoods
    // },

    // getEnglishFoods() {
    //   return this.dishes.filter(function(dish) {
    //     return dish.region === "gb-eng"
    //   });
    // },

    // getIrishFoods() {
    //   return this.dishes.filter(function(dish) {
    //     return dish.region === "gb-nir"
    //   });
    // },

    // getWelshFoods() {
    //   return this.dishes.filter(function(dish) {
    //     return dish.region === "gb-wls"
    //   });
    // }
  



  handler() {
    var args = arguments;
    for (var arg of args) {
      if (arg instanceof Function) {
        arg();
        }
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  font-family: 'Schoolbell', cursive;
  height: 100%;
  /* background-color: rgb(30, 15, 124); */
  margin: 0px;
}

#chartgrid {
  display: flex;
  align-items: flex-start;
}

h3 {
  text-align: center;
}

#uk {
  margin: 70px;
}

</style>
