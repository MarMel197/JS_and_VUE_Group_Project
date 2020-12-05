<template>
    <li v-on:click="handleClick">{{food.name}}</li>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    name: 'food-select',
    props: ['food'],
    methods: {
        handleClick(){
            eventBus.$emit('food-selected', this.food)
        }
    }
}
</script>

<style>

</style>