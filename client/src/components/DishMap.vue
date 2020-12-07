<template>
  	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Best British Bites</title>

		<style type="text/css">
        <script src="https://code.highcharts.com/maps/highmaps.js"></script>
        <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/mapdata/countries/gb/custom/gb-countries.js"></script>
        
        <div id="container"></div>

<div id="container" style="max-width: 1000px"></div>
</template>

<script>
export default {

}



const data = [
    ['gb-eng', 0],
    ['gb-wls', 1],
    ['gb-sct', 2],
    ['gb-nir', 3]
    ];
        
    // Create the chart
    Highcharts.mapChart'container', {
        chart: {
            map: 'countries/gb/custom/gb-countries'
        },
        
            title: {
                text: 'Best British Bites'
            },
        
            subtitle: {
                text: 'Discover the best of British Cuisine'
            },
        
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
        
            // colorAxis: {
            //     min: 0
            // },
        
            series: [{
                data: data,
                name: '',
                states: {
                    hover: {
                        color: 'blue'
                    }
                },
                // dataLabels: {
                //     enabled: true,
                //     format: '{point.name}'
                // }
            }]
        };



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