<!--
@File: DrawMoviesTypesPie.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 2:53
-->
<template>
  <el-card class="box-card">
    <div id="moviesTypesPie"></div>
  </el-card>
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
      const chartDom = document.getElementById('moviesTypesPie');
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
    async getMoviesTypeData() {
      const {data: response} = await this.$axios.get('/echarts_info_movies_type');
      if (response.code !== 200) {
        return response.msg;
      } else {
        let dataMovieType = response.data[0].moviesType;
        this.drawEchartsPie(dataMovieType)
      }
    }
  },
  created() {
    this.getMoviesTypeData();
  },
}
</script>

<style scoped lang="less" type="text/css">

#moviesTypesPie {
  width: 785px;
  height: 700px;
}

.box-card {
  width: 785px;
  height: 700px;
  display: inline-block;
  margin-right: 15px;
}

</style>
