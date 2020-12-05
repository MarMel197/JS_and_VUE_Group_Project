<template>
    <div v-if='food' id="foodDetail">
        <div>
            <h2>{{food.name}}</h2>
        </div>
        <div>
            <p><span>Name</span>: {{food.name}}</p>
            <p><span>Description</span>: {{food.description}}</p>
            <p><span>Key Ingredients</span>: {{food.ingredients}}</p>
            <p><span>Origin</span>: {{food.origin}}</p>
            <p><span>Region</span>: {{food.region}}</p>
        </div>
        <!-- URL's ?? -->
    </div>
</template>

<script>
export default {
    name: 'food-detail',
    

}
</script>

<style>

</style>