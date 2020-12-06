<template> 
    <div v-if="dish" id="dishDetail">
        <h3>{{dish.name}}</h3>
        <p>Description: {{dish.description}}</p>
        <p>Origin: {{dish.origin}}</p>
    </div>
    <div v-else>
        <p>Choose a dish!</p>
    </div>
</template>

<script>
export default {
    name: 'dish-detail',
    props: ['dish']
}
</script>