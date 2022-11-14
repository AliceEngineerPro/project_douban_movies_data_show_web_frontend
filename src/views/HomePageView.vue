<!--
@File: HomePageView.vue
@Author: Alice(From Chengdu.China)
@HomePage: https://github.com/AliceEngineerPro
@CreatedTime: 2022/11/15 1:51
-->
<template>
  <HomePage></HomePage>
</template>

<script>
import HomePage from '@/components/HomePage'
import axios from 'axios'

export default {
  name: 'HomePageView',
  components: {
    HomePage
  },
  data () {
    return {
      part1_data: []
    }
  },
  methods: {
    get_part1_data () {
      axios
        .get('http://127.0.0.1:52015/api/private/v1/home/preview/part1')
        .then(response => {
          this.part1_data = response.data.data.Amount
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.get_part1_data()
  }
}
</script>

<style scoped>

</style>
