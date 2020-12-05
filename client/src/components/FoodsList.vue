<template>
    <div id="foodsList">
        <ul>

        </ul>
    </div>
</template>

<script>
import FoodSelect from './FoodSelect.vue'
export default {
    name: 'foods-list',
    props: ['foods'],
    components: {
        'food-select': FoodSelect
    }
}
</script>

<style>

</style>