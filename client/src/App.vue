<template>
  <div id="app">
    <dishes-form />
    <dishes-grid :dishes="dishes"/>
  </div>
</template>

<script>
import { eventBus } from './main';
import DishesForm from './components/DishesForm';
import DishesGrid from './components/DishesGrid';
import DishDetail from './components/DishDetail';
import DishesList from './components/DishesList';
import DishService from './services/DishService'




export default {
  name: 'app',
  components: {
    'dishes-form': DishesForm,
    'dishes-grid': DishesGrid,
    'dishes-list': DishesList
  },
  data() {
    return {
      dishes: [],
      selectedDish: null

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
    
    eventBus.$on("dish-selected", dish => (this.selectedDish = dish));
    //     eventBus.$on('dish-selected', (dish) => {
    //   this.selectedDish = dish;
    // }); 
  },
  methods: {
    fetchdishes() {
      DishService.getDishes()
        .then(dishes => this.dishes = dishes);
    }
  },
  
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
