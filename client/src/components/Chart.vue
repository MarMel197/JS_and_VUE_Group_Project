<template>
<div>
    <highcharts id="container" :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
</div>
</template>

<script>
import Britian from '@highcharts/map-collection/countries/gb/custom/gb-countries.geo.json'
import { eventBus } from '@/main';

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
            alignTo: 'spacingBox'}
        },
        colorAxis: {
            min: 0
        },
        series: [{
            name: "British Best Bites",
            states: {
            hover: {
            color: '#BADA55'
            }
            },
        events: {
            click: ({point}) => {
                eventBus.$emit('region-selected', point["hc-key"]); 
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        allAreas: true,
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
    height: 800px; 
    min-width: 600px; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
}
.loading {
    margin-top: 10em;
    text-align: center;
    color: gray;
}

</style>