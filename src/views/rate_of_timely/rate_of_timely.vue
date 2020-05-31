<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">报告及时率统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="应出报告日期" class="time">
            <div class="block">
              <el-date-picker v-model="value2"  type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px;margin-right: 20px;'>
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
    <!-- 饼状图--列表 -->
    <div class='flex'>
      <div class="left">
        <div class="title">
          报告及时率统计
        </div>
        <!-- 饼状图 -->
        <div class="rate">
          <div id="main" style="width: 100%;height:440px;"></div>
        </div>
      </div>
      <div class="right left">
        <div class="title">
          委托报告列表
        </div>
        <div class="table">
          <el-table ref="multipleTable" height='100%' :default-sort = "{prop: 'date', order: 'descending'}" border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
           <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="序号" width="120">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column prop="date" label="委托单位" sortable >
            </el-table-column>
            <el-table-column prop="name" label="任务编号" sortable >
            </el-table-column>
            <el-table-column prop="address" label="报告概述" sortable >
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
  name: "rate_of_timely",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },],
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
    init() {
      // 绘制图表
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['预警期完成', '合理期完成', '超期已完成', '预警期未完成', '进行中', '超期未完成']
        },
        series: [
          {
            name: '报告差错率统计',
            type: 'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 45, name: '预警期完成' },
              { value: 310, name: '合理期完成' },
              { value: 45, name: '超期已完成' },
              { value: 310, name: '预警期未完成' },
              { value: 45, name: '进行中' },
              { value: 310, name: '超期未完成' },

            ],
            itemStyle: {
              emphasis: { //饼状图阴影。外发光
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    '#53aae4', '#c36662', '#e99d3d', '#f5dc4e', '#ec9263', '#a3d3f8'
                  ];
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      }
      return option
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    myChart.setOption(this.init())
    window.onresize = myChart.resize;
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
      padding: 5px 0 0 0;
    }
  }
}
</style>
