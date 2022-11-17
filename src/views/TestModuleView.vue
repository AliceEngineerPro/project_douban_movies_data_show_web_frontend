<!--
@File: TestModuleView.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/17 2:55
-->
<template>
  <DrawMoviesScoreLine></DrawMoviesScoreLine>
</template>

<script>
import DrawMoviesTypesPie from "@/components/echarts/MoviesTypePie/DrawMoviesTypesPie";
import DrawMoviesScoreLine from "@/components/echarts/MoviesScoreLine/DrawMoviesScoreLine";

export default {
  name: "TestModuleView",
  components: {
    DrawMoviesTypesPie,
    DrawMoviesScoreLine
  }
}
</script>

<style scoped>

</style>
