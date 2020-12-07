<template>
<div>
    <highcharts id="container"  :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
</div>

</template>


<script>
import Britian from '@highcharts/map-collection/countries/gb/custom/gb-countries.geo.json'


export default {
    data() {
        return {
            chartOptions: {
            chart: {
            map: Britian
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
            alignTo: 'spacingBox'
        }
        },
        colorAxis: {
            min: 0
        },
        series: [{
            name: 'Random data',
            states: {
            hover: {
            color: '#BADA55'
            }
            },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        },
        allAreas: false,
        data: [
            ['gb-eng', 0],
            ['gb-wls', 1],
            ['gb-sct', 2],
            ['gb-nir', 3]
          ]
        }]
      },
      
    };
  }
};
</script>

<style>

#container {
    height: 1000px; 
    min-width: 800px; 
    max-width: 800px; 
    margin: 0 auto; 
}
.loading {
    margin-top: 10em;
    text-align: center;
    color: gray;
}

</style>