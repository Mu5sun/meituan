<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <m-header />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MHeader from '@/components/header/index'

export default {
  components: {
    MHeader
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>
