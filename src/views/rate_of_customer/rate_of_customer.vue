<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">大客户区间统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="签订日期" class="time">
            <div class="block">
              <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px;margin-right: 20px;'>
              </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="金额设定(元)" class="time">
            <div class="block">
              <el-input v-model="input" placeholder="请输入金额" style="margin-right: 10px;"></el-input>——<el-input v-model="input" style="margin-left: 10px;margin-right: 10px;" placeholder="请输入金额"></el-input>——<el-input v-model="input" style="margin-left: 10px;margin-right: 20px;" placeholder="请输入金额"></el-input>
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
          客户额度区间
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
          <el-table ref="multipleTable" :default-sort="{prop: 'date', order: 'descending'}" height='100%' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="序号" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="客户名称" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="委托数量(份)" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="回款率" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="总额占比" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="委托总额" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
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
  name: "rate_of_customer",
  data() {
    return {
      input: "",
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
    init () {
      // 绘制图表
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          text: '客户总量：9',
          left: 'center',
          textStyle: {
            color: '#333'
          }
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['0-5000', '5000-10000', '10000-50000', '50000+']
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
              { value: 45, name: '0-5000' },
              { value: 310, name: '5000-10000' },
              { value: 45, name: '10000-50000' },
              { value: 310, name: '50000+' },
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
  mounted () {
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
