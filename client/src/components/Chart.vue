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
        // series: {
        //       cursor: 'pointer',
        //       point: {
        //         events: {
        //           click: ({point}) => {
        //               console.log("Ive been clicked");
        //           }
        //         }
        //       }
        //     },
        series: [{
            name: null,
            states: {
            hover: {
            color: '#BADA55'
            }
            },
            events: {
                click: ({point}) => {
                    eventBus.$emit('region-selected'); //create event bus emit and pass point["hc-key"]
                }
            },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        allAreas: true,
        data: [
            ['gb-eng', 0],
            ['gb-wls', 0],
            ['gb-sct', 0],
            ['gb-nir', 0]
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