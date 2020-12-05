<template>
    <div id="regionsList">
        <ul>

        </ul>
    </div>
</template>

<script>
import regionSelect from './RegionSelect.vue'
export default {
    name: 'regions-list',
    props: ['regions'],
    components: {
        'region-select': RegionSelect
    }
}
</script>

<style>

</style>