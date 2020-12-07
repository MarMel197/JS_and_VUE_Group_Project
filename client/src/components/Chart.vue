<template>
<div>
    <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
</div>
<!-- 
<div id="container" style="max-width: 1000px"></div> -->
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
          text: 'Best British Bites'
        },
        subtitle: {
          text: 'Source map: <a href="http://https://code.highcharts.com/mapdata/countries/gb/custom/gb-countries.js">British Best Bites</a>'
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
            enabled: true,
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
      }
    };
  }
};
</script>

</script>

<style>

#container {
    height: 1000px; 
    min-width: 310px; 
    max-width: 800px; 
    margin: 0 auto; 
}
.loading {
    margin-top: 10em;
    text-align: center;
    color: gray;
}

</style>