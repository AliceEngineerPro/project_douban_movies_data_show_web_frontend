<!--
@File: DrawMoviesScoreLine.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 4:56
-->
<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  name: "DrawMoviesScoreLine",
  methods: {
    drawEchartsLine() {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      let option;

          option = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              // data: xAxis_data
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                // data: yAxis_data,
                type: 'line',
                areaStyle: {}
              }
            ]
          };

      option && myChart.setOption(option);
    },
    async getIndexEchartsData() {
      const {data: data} = await this.$axios.get('/getIndexEchartsData');
      if (data.code !== 200) {
        return data.msg;
      } else {
        let dataMovieType = data.data.MovieTypeEcharts;
        this.drawEchartsLine()
      }
    }
  },
  created() {
    this.getIndexEchartsData();
  },
}
</script>

<style scoped type="text/css">

#main {
  width: 600px;
  height: 600px;
}

</style>
