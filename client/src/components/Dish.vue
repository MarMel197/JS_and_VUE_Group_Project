<template lang="html">
  <div class="dish">
    <h2>{{ dish.name }}</h2>
    <p>{{ dish.description }}</p>
    <p>{{ dish.origin }}</p>

    <button v-on:click="handleDelete(dish._id)">Delete dish</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'dish',
  props: ['dish'],
//   filters: {
//     formatDate(value) {
//       return new Date(value).toLocaleString().substring(0, 10);
//     }
//   },
  methods: {
    handleDelete(id) {
      eventBus.$emit('delete-dish', id);
    }
  }
}
</script>