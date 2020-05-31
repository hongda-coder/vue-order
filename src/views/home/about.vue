<!-- home -->
<template>
  <div class="app-container" v-height>
    <el-row>
      <el-button type="primary" @click="toPage('/index')">系统首页</el-button>
      <el-button type="success" @click="toPage('/rate_of_error')">报告差错率统计</el-button>
      <el-button type="info" @click="toPage('/rate_of_timely')">报告及时率统计</el-button>
      <el-button type="warning" @click="toPage('/rate_of_customer')">大客户区间统计</el-button>
      <el-button type="danger" @click="toPage('/address_pact')">地区合同分布</el-button>
      <el-button type="danger" @click="toPage('/address_ent')">地区委托分布</el-button>
      <el-button type="primary" @click="toPage('/person_report')">个人报告量统计</el-button>
      <el-button type="primary" @click="toPage('/person_pact')">个人合同统计</el-button>
      <el-button type="success" @click="toPage('/person_sample')">个人采样统计</el-button>
      <el-button type="info" @click="toPage('/person_ent')">个人委托统计</el-button>
      <el-button type="warning" @click="toPage('/science_check')">科室检测统计</el-button>
      <el-button type="danger" @click="toPage('/person_check')">个人检测统计</el-button>
	    <el-button type="primary" @click="toPage('/rate_of_instrumen')">仪器使用统计</el-button>
      <el-button type="success" @click="toPage('/demo_query_speed')">样品进度查询</el-button>
      <el-button type="info" @click="toPage('/project_query_speed')">项目进度查询</el-button>
      <el-button type="warning" @click="toPage('/ent_state')">委托状态分布</el-button>
      <el-button type="danger" @click="toPage('/address_customer')">客户地理分布地图</el-button>
      <el-button type="primary" @click="toPage('/year_pact')">年度合同统计</el-button>
      <el-button type="success" @click="toPage('/year_ent')">年度委托量统计</el-button>
      <el-button type="info" @click="toPage('/year_sample')">年度采样统计</el-button>
      <el-button type="warning" @click="toPage('/year_check')">年度检测统计</el-button>
      <el-button type="danger" @click="toPage('/project_pass')">项目超标量统计</el-button>
      <el-button type="primary" @click="toPage('/task_query_speed')">任务进度查询</el-button>
      <el-button type="success" @click="toPage('/year_report')">年度报告统计</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toPage(page) {
      this.$router.push(page)
    }
  },
}
</script>


<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 450px;
  line-height: 100px;
  flex-direction: column;
}
</style>
