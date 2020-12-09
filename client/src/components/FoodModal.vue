<template>
<modal name="food-modal-example" :min-width="200"
    :min-height="200"
    :resizable="true"
    styles="font-style: italic;">

    <div>
        <p>{{selectedDish.name}}</p>
        <p>Description: {{selectedDish.description}}</p>
        <p>Origin: {{selectedDish.origin}}</p>
        <img class="image" :src="selectedDish.image_url "/>
    </div>

    </modal>


</template>

<script>
import VModal from 'vue-js-modal'

export default {
    name: 'food-modal',
    props: ['selectedDish']
    

}
</script>

<style>
.image {
  height: 100px;
}

</style>