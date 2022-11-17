<!--
@File: DrawMoviesTypesPie.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 2:53
-->
<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

export default {
  name: "DrawMoviesTypesPie",
  methods: {
    drawEchartsPie(data) {
      const chartDom = document.getElementById('main');
      const myChart = echarts.init(chartDom);
      let option;

      option = {
        title: {
          text: '电影类型统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
        this.drawEchartsPie(dataMovieType)
      }
    }
  },
  created() {
    this.getIndexEchartsData();
  },
}
</script>

<style scoped lang="less" type="text/css">

#main {
  width: 600px;
  height: 600px;
}

</style>
