<template>
    <li v-on:click="handleClick">{{dish.name}}</li>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    name: 'dish-list-item',
    props: ['dish'],
    methods: {
        handleClick(){
            eventBus.$emit('dish-selected', this.dish)
        }
    }

}
</script>

<style>

</style>