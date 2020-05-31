<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">个人报告量统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
        <!-- 编制日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="人员选择" class="time">
            <div class="block">
              <el-select v-model="value5" multiple filterable allow-create default-first-option placeholder="请选择人员" style="width: 300px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-form-item>
        </el-form>
        <el-form style="margin-left: 20px;">
          <el-form-item label="签发日期" class="time">
            <div class="block">
              <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px;'>
              </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <el-form style="margin-left: 20px;">
          <el-form-item label="报告类型" class="time">
            <div class="block">
              <el-input placeholder="请输入报告类型" style="width:250px;margin-right: 20px;"></el-input>
              <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;" icon="el-icon-search" class="btn">搜索</el-button>
            </div>
          </el-form-item>
        </el-form>
      </span>
      <el-form style="margin-right: 20px;">
        <div class="block">
          <el-button v-waves style="width:60px;" type="danger" @click="exportFile" plain>导出</el-button>
        </div>
      </el-form>
    </div>

    <!-- 饼状图--列表 -->
    <div class='flex'>
      <div class="left">
        <div class="title">
          个人报告统计
        </div>
        <!-- 饼状图 -->
        <div class="rate">
          <div id="myChart" style="width: 100%;height:440px;"></div>
        </div>
      </div>
      <div class="right left">
        <div class="title">
          个人报告列表
        </div>
        <div class="table">
          <el-table ref="multipleTable" height='100%' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column label="序号" width="120" align="center">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column prop="rep_num" label="姓名" >
            </el-table-column>
            <el-table-column prop="task_num" label="数量" >
            </el-table-column>
            <el-table-column prop="rep_type" label="完成率" >
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
  name: 'person_report',
  data() {
    return {
      value1: '',
      value2: '',
      search: '',
      tableData: [
        {
          rep_num: '文骏',
          task_num: '9',
          rep_type: '100%',
        }
      ],
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
      multipleSelection: [],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶'
        }, 
        {
          value: '选项3',
          label: '蚵仔煎'
        }, 
        {
          value: '选项4',
          label: '龙须面'
        }, 
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value5: ''
    }
  },
  methods: {
    // echart
    initCharts () {
      var option= {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['环评']
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['文骏']
        },
        series: [
          {
            name: '环评',
            type: 'bar',
            stack: '总量',
            color: '#70CFF5',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [9]
          },
        ]
      }
      return option
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    //导出错误
    exportFile () {
      this.$notify.error({
        title: '提示',
        message: '这是一条错误的提示消息'
      });
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById('myChart'))
    this.chart.setOption(this.initCharts())
    window.onresize = this.chart.resize;
  }

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
  padding: 0 15px;
  height: 85%;
  box-sizing: border-box;
  .left {
    width: 40%;
    height: 100%;
    border: 3px solid #f0f0f0;
    .title {
      line-height: 45px;
      font-weight: bold;
      padding-left: 15px;
      font-size: 18px;
      background: #f9f9f9;
      border: 3px solid #f0f0f0;
      border-left: none;
      border-right: none;
      border-top: none;
    }
    .rate {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 95%;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    margin-left: 25px;
    .table {
      height: 89%;
      overflow: auto;
    }
    .page {
      text-align: center;
      margin-top: 12px;
      padding: 5px 0 0 0;
    }
  }
}

</style>