<!--
@File: HomePageView.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/15 1:35
-->
<template>
  <!--  <div class="home_page_center">-->
  <!--    <div>电影数据个数</div>-->
  <!--    <div>{{ movie_amount }} 个</div>-->
  <!--    <div>豆瓣最高评分</div>-->
  <!--    <div>{{ movie_score_max }} 分</div>-->
  <!--    <div>作品最多演员</div>-->
  <!--    <div>{{ movies_actor_max }}</div>-->
  <!--    <div>制片最多国家</div>-->
  <!--    <div>{{ movies_movie_country_max }}</div>-->
  <!--    <div>电影类型总数</div>-->
  <!--    <div>{{ movies_movie_type_amount }} 个</div>-->
  <!--    <div>电影最多语言</div>-->
  <!--    <div>{{ movies_movie_lang_max }}</div>-->
  <!--  </div>-->
  <el-container class="home_page_center">
    <el-header>
      <div>
        <img src="../assets/images/logo.jpg" alt="logo">
        <span>豆瓣电影数据分析</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                Navigator One
              </template>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                Navigator Two
              </template>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'HomePage'

}
</script>

<style scoped lang="less">
.home_page_center {
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
