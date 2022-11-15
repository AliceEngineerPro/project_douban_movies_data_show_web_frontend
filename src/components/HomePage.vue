<!--
@File: HomePage.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/16 0:57
-->
<template>
  <el-container class="home_page_center">
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

          <div class="row">
            <div class="col-xl-2 mb-4">
              <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">电影数据个数</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ amount }} 个</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">豆瓣最高评分</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ scoreMax }} 分</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">作品最多演员</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ actorMax }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">制片最多国家</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ movieCountryMax }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 mb-4">
              <div class="card border-left-secondary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">电影类型总数</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ movieTypeAmount }} 个</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">电影最多语言</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{ movieLangMax }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    amount: '正在加载...',
    scoreMax: '正在加载...',
    actorMax: '正在加载...',
    movieCountryMax: '正在加载...',
    movieTypeAmount: '正在加载...',
    movieLangMax: '正在加载...',
  }
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
















