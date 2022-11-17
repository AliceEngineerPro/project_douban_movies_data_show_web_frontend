<!--
@File: HomePage.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/16 0:57
-->
<template>
  <el-container class="homepage">
    <el-header>
      <div>
        <img src="@/static/images/logo64.svg" alt="logo">
        <span>豆瓣电影数据分析</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#343444" text-color="#ffffff" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <el-icon>
              <img src="@/static/images/home16_white.svg" alt="home">
            </el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <img src="@/static/images/search16_white.svg" alt="search">
            </el-icon>
            <template #title>搜索</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>

            <IndexCard></IndexCard>
            <DrawMoviesTypesPie></DrawMoviesTypesPie>
            <DrawMoviesScoreLine></DrawMoviesScoreLine>

          <div>123</div>

        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import DrawMoviesTypesPie from '@/components/echarts/MoviesTypePie/DrawMoviesTypesPie'
import DrawMoviesScoreLine from "@/components/echarts/MoviesScoreLine/DrawMoviesScoreLine";
import IndexCard from "@/components/visualization/IndexCard";

export default {
  name: 'HomePage',
  components: {
    DrawMoviesTypesPie,
    DrawMoviesScoreLine,
    IndexCard
  },
}

</script>

<style scoped lang="less" type="text/css">

.homepage {
  height: 100%;
}

.el-header {
  background: #373D41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  color: #FFFFFF;
  font-size: 20px;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background: #333744;
}

.el-main {
  background: #EAEDF1
}

.el-footer {
  background: #EAEDF1;
}

</style>
















