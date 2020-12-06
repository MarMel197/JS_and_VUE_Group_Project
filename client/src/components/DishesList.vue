<template lang="html">
  <div class="dish-list" v-if="dishes.length">
    <dish-list-item
      v-for="(dish, index) in dishes"
      :dish="dish"
      :key="index"
    >
    </dish-list-item>
  </div>
</template>

<script>
import DishListItem from "@/components/DishListItem";

export default {
  name: "dishes-list",
  props: ["dishes"],
  components: {
    "dish-list-item": DishListItem
  }
};
</script>