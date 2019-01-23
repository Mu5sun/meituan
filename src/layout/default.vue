<template>
  <div class="page-default">
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
