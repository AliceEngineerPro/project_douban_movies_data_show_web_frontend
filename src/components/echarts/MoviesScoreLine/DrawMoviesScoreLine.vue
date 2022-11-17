<!--
@File: DrawMoviesScoreLine.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 4:56
-->
<template>
  <div id="moviesScoreLine"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {GridComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  name: "DrawMoviesScoreLine",
  methods: {
    drawEchartsLine(xAxis_data, yAxis_data) {
      const chartDom = document.getElementById('moviesScoreLine');
      const myChart = echarts.init(chartDom);
      let option;

      option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxis_data
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: yAxis_data,
            type: 'line',
            areaStyle: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    async getMoviesScoreData() {
      const {data: response} = await this.$axios.get('/echarts_info_movies_score');
      if (response.code !== 200) {
        return response.msg;
      } else {
        let dataMovieScore = response.data[0].moviesScore;
        let dataMovieAmount = response.data[1].moviesAmount;
        this.drawEchartsLine(dataMovieScore, dataMovieAmount)
      }
    }
  },
  created() {
    this.getMoviesScoreData();
  },
}
</script>

<style scoped type="text/css">

#moviesScoreLine {
  width: 600px;
  height: 600px;
}

</style>
