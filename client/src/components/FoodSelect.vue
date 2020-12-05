<template>
    <li v-on:click="handleClick">{{region.name}}</li>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    name: 'region-select',
    props: ['region'],
    methods: {
        handleClick(){
            eventBus.$emit('region-selected', this.region)
        }
    }
}
</script>

<style>

</style>