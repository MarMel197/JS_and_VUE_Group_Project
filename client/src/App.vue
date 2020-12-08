<template>
  <div id="app">

    <header class="header">Best British Bites!</header>
    <dishes-form id="dishes-form"/>
    <chart id="uk" ></chart>
    <br>
    <dishes-grid :dishes="dishes"/>

  </div>
</template>

<script>
import { eventBus } from './main';
import DishesForm from './components/DishesForm';
import DishesGrid from './components/DishesGrid';
import DishDetail from './components/DishDetail';
import DishesList from './components/DishesList';
import Chart from "./components/Chart";
import DishService from './services/DishService'







export default {
  name: 'app',
  components: {
    'dishes-form': DishesForm,
    'dishes-grid': DishesGrid,
    'dishes-list': DishesList,
    'chart': Chart
  },
  data() {
    return {
      dishes: [],
      selectedDish: null,
      point: {}

    };
  },
	mounted() {
    this.fetchdishes();

    eventBus.$on('submit-dish', payload => {
      DishService.postDish(payload)
		.then(dish => this.dishes.push(dish));
    });

    eventBus.$on('delete-dish', id => {
      DishService.deleteDish(id)
        .then(() => {
          const index = this.dishes.findIndex(dish => dish._id === id);
          this.dishes.splice(index, 1);
        });
    });

    // eventBus on 'region-selected' 
    eventBus.$on("region-selected", dish => {
      this.getScottishFoods = dish
      });
    
    eventBus.$on("dish-selected", dish => (this.selectedDish = dish));

  },
  methods: {
    fetchdishes() {
      DishService.getDishes()
        .then((dishes) => {
          this.dishes = dishes
          // this.dishes = this.getScottishFoods() needed in the event bus $on
          // this.dishes = this.getEnglishFoods()
          });
    },
    getScottishFoods() {
      return this.dishes.filter(function(dish) {
        return dish.region === "gb-sct"
      });
    },

    getEnglishFoods() {
      return this.dishes.filter(function(dish) {
        return dish.region === "gb-eng"
      });
    },

    getIrishFoods() {
      return this.dishes.filter(function(dish) {
        return dish.region === "gb-nir"
      });
    },

    getWelshFoods() {
      return this.dishes.filter(function(dish) {
        return dish.region === "gb-wls"
      });
    }

  },



    handler() {
      var args = arguments;
      for (var arg of args) {
        if (arg instanceof Function) {
          arg();
        }
      }
    }
  };
</script>

<style>
html {
  height: 100%;
}

.header {
    font-family: 'Schoolbell', cursive;
    margin: 10px;
    padding: 30px;
    text-align: center;
    color: rgb(11, 86, 133);
    font-size: 60px;
}


body {
  font-family: 'Schoolbell', cursive;
  height: 100%;
  background-color: rgba(197, 244, 255, 0.536);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#dishes-form {
    /* display: flex; */

}
</style>
