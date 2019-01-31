<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :navList="istyleList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/index/menu'
import MLife from '@/components/index/life'
import Container from '@/components/index/container'

export default {
  data () {
    return {
      istyleList: [
        {
          tab: 'all',
          text: '全部'
        },
        {
          tab: 'food',
          text: '约会聚餐'
        },
        {
          tab: 'spa',
          text: '丽人SPA'
        },
        {
          tab: 'movie',
          text: '电影演出'
        },
        {
          tab: 'travel',
          text: '品质出游'
        }
      ]
    }
  },
  components: {
    MMenu,
    MLife,
    Container
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/index/index.scss';
</style>
