<!--
@File: TestModuleView.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 2:55
-->
<template>
  <indexCard></indexCard>
  <DrawMoviesTypesPie></DrawMoviesTypesPie>
  <DrawMoviesScoreLine></DrawMoviesScoreLine>
</template>

<script>
import DrawMoviesTypesPie from "@/components/echarts/MoviesTypePie/DrawMoviesTypesPie";
import DrawMoviesScoreLine from "@/components/echarts/MoviesScoreLine/DrawMoviesScoreLine";
import indexCard from "@/components/visualization/IndexCard";

export default {
  name: "TestModuleView",
  components: {
    DrawMoviesTypesPie,
    DrawMoviesScoreLine,
    indexCard
  }
}
</script>

<style scoped>

</style>
