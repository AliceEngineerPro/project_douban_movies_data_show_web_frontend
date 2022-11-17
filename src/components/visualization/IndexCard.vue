<!--
@File: IndexCard.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 21:38
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影数据个数</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoAmount }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>豆瓣最高评分</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoScoreMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>作品最多演员</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoActorMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>制片最多国家</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoCountryMax }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影类型总数</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoTypeAmount }}</div>
  </el-card>

  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>电影最多语言</span>
      </div>
    </template>
    <div class="text item">{{ baseInfoLanguagesMax }}</div>
  </el-card>


<!--  <div>电影数据个数</div>-->
<!--  <div>{{ baseInfoAmount }}</div>-->
<!--  <div>豆瓣最高评分</div>-->
<!--  <div>{{ baseInfoScoreMax }}</div>-->
<!--  <div>作品最多演员</div>-->
<!--  <div>{{ baseInfoActorMax }}</div>-->
<!--  <div>制片最多国家</div>-->
<!--  <div>{{ baseInfoCountryMax }}</div>-->
<!--  <div>电影类型总数</div>-->
<!--  <div>{{ baseInfoTypeAmount }}</div>-->
<!--  <div>电影最多语言</div>-->
<!--  <div>{{ baseInfoLanguagesMax }}</div>-->
</template>

<script>
import DrawMoviesTypesPie from '@/components/echarts/MoviesTypePie/DrawMoviesTypesPie'
import DrawMoviesScoreLine from "@/components/echarts/MoviesScoreLine/DrawMoviesScoreLine";

export default {
  name: 'IndexCard',
  components: {
    DrawMoviesTypesPie,
    DrawMoviesScoreLine,
  },
  data() {
    return {
      baseInfoAmount: null,
      baseInfoScoreMax: null,
      baseInfoActorMax: null,
      baseInfoCountryMax: null,
      baseInfoTypeAmount: null,
      baseInfoLanguagesMax: null,
    }
  },
  created() {
    this.getBaseInfoAmount();
    this.getBaseInfoScoreMax();
    this.getBaseInfoActorMax();
    this.getBaseInfoCountryMax();
    this.getBaseInfoTypeAmount();
    this.getBaseInfoLanguagesMax();
  },
  methods: {
    async getBaseInfoAmount() {
      const {data: response} = await this.$axios.get('base_info_amount');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoAmount = response.data[0].moviesAmount + '个';
      }
    },
    async getBaseInfoScoreMax() {
      const {data: response} = await this.$axios.get('base_info_score_max');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoScoreMax = response.data[0].scoreMax + '分';
      }
    },
    async getBaseInfoActorMax() {
      const {data: response} = await this.$axios.get('base_info_actor_max');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoActorMax = response.data[0].actorMax;
      }
    },
    async getBaseInfoCountryMax() {
      const {data: response} = await this.$axios.get('base_info_country_max');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoCountryMax = response.data[0].countryMax;
      }
    },
    async getBaseInfoTypeAmount() {
      const {data: response} = await this.$axios.get('base_info_type_amount');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoTypeAmount = response.data[0].typeAmount + '个';
      }
    },
    async getBaseInfoLanguagesMax() {
      const {data: response} = await this.$axios.get('base_info_languages_max');
      if (response.code !== 200) {
        return response.msg;
      } else {
        this.baseInfoLanguagesMax = response.data[0].languagesMax;
      }
    },
  }
}

</script>

<style scoped lang="less" type="text/css">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
