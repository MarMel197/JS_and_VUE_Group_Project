<template>
    <div id="foodsList">
        <ul>

        </ul>
    </div>
</template>

<script>
import foodSelect from './FoodSelect.vue'
export default {
    name: 'foods-list',
    props: ['foods'],
    components: {
        'list-component': ListComponent
    }
}
</script>

<style>

</style>