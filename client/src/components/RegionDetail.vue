<template>
  <div v-if="region" id="regionDetail">
      <div>
          <h2>{{region.name}}</h2>
      </div>
      <div>
          <p><span>Region</span>: {{ region.dishes }}</p>
      </div>

  </div>
</template>

<script>
export default {
    name: 'region-detail',
    props: ['region']
}
</script>

<style>

</style>