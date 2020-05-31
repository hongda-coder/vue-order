<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">样品进度查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="样品类别" class="time">
            <div class="block">
              <el-input v-model="input" placeholder="请输入样品类别" style="margin-right: 20px;width:5rem"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="样品编号" class="time">
            <div class="block">
              <el-input v-model="input" placeholder="请输入样品编号" style="margin-right: 20px;width:5rem"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="采样日期" class="time">
            <div class="block">
              <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px;margin-right: 20px;'>
              </el-date-picker>
              <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;" icon="el-icon-search" class="btn">搜索</el-button>
            </div>

          </el-form-item>
        </el-form>
      </span>
      <el-form style="margin-right: 20px;">
        <div class="block">
          <el-button v-waves style="width:60px;" type="danger" plain>导出</el-button>
        </div>
      </el-form>
    </div>
    <!-- item -->
    <div class="item">
      <div>
        <span>预警期</span>
        <span>未完成</span>
        <span>0</span>
      </div>

      <div style="background: #cdcdcd;">
        <span>预警期</span>
        <span>已完成</span>
        <span style="background: #cdcdcd;">0</span>
      </div>
      <div style="background: #d47e7a;">
        <span>预警期</span>
        <span>未完成</span>
        <span style="background: #d47e7a;">0</span>
      </div>
      <div style="background: #cdcdcd;">
        <span>预警期</span>
        <span>未完成</span>
        <span style="background: #cdcdcd;">0</span>
      </div>
      <div style="background: #52a8e6;">
        <span>预警期</span>
        <span>未完成</span>
        <span style="background: #52a8e6;">0</span>
      </div>
      <div style="background: #cdcdcd;">
        <span>预警期</span>
        <span>未完成</span>
        <span style="background: #cdcdcd;">0</span>
      </div>
    </div>
    <!-- 饼状图--列表 -->
    <div class='flex'>
      <div class="right">
        <div class="table">
          <el-table ref="multipleTable" :default-sort="{prop: 'date', order: 'descending'}" height='100%' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" align="center" width="55">
            </el-table-column>
            <el-table-column label="序号">
            </el-table-column>
            <el-table-column prop="name" label="样品名称" sortable>
            </el-table-column>
            <el-table-column prop="name" label="要求时间" sortable>
            </el-table-column>
            <el-table-column prop="name" label="采样时间" sortable>
            </el-table-column>
            <el-table-column prop="name" label="交接时间" sortable>
            </el-table-column>
          </el-table>
        </div>
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: "rate_of_instrumen",
  data() {
    return {
      input: "",
      tableData: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value2: ''
    };
  },
  methods: {

    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.mianbaoxie {
  padding: 20px 0 20px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  .link {
    /deep/ span {
      font-size: 18px;
      font-weight: 800;
    }
  }
}
.select_time {
  padding: 15px 0 0px 15px;
  display: flex;
  justify-content: space-between;
  > span {
    display: flex;
  }
  .block {
    display: flex;
  }
  .time {
    /deep/ .el-form-item__label {
      &::before {
        display: inline-block;
        content: '';
        width: 4px;
        height: 14px;
        background: #fe8130;
        margin-right: 10px;
      }
    }
  }
}
.flex {
  display: flex;
  padding: 10px 15px 0 15px;
  height: 75%;
  box-sizing: border-box;
  .right {
    flex: 1;
    height: 100%;
    .table {
      height: 89%;
      overflow: auto;
    }
    .page {
      text-align: right;
      padding: 25px 0 0 0;
    }
  }
}
.item {
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > div {
    width: 15%;
    height: 80px;
    background: #e5a650;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    position: relative;
    span {
      &:first-child {
        &::after {
          display: inline-block;
          content: '';
          width: 1.5px;
          height: 15px;
          background: #fff;
          margin: 0 10px;
        }
      }
      &:nth-child(3) {
        width: 40px;
        height: 40px;
        background: #e5a650;
        position: absolute;
        bottom: -6px;
        right: -6px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        line-height: 42px;
        border: 5px solid #fff;
      }
    }
  }
}
</style>
