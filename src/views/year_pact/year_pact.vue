<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">年度合同统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

     <!-- 制单日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="制单日期" class="time">
            <div class="block">
              <el-date-picker v-model="data_value" type="year" placeholder="选择日期"> </el-date-picker>
            </div>
          </el-form-item>
        </el-form>

        <el-form style="margin-left: 20px;">
          <el-form-item label="类型" class="time">
            <div class="block">
              <el-select v-model="search_name" placeholder="请选择人员" style="width: 300px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
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
        <!-- 饼状图-- -->
    <div class='flex'>
      <div class="left">
        <div class="title">
          2019年度合同量统计
        </div>
        <!-- 统计图 -->
        <div class="rate">
          <div id="myChart" style="width: 100%;height:300px;"></div>
        </div>
      </div>

      <div class="right " style="margin-left:20px;">
        <div class="title">
          2019年度合同量统计
        </div>
        <div class="rate">
          <div id="cookieChart" style="width: 100%;height:300px;"></div>
        </div>
      </div>
    </div>

      <!-- 列表 -->
    <div class="my-table">
      <div class="right">
        <div class="title">
          年度合同列表
        </div>
        <div class="table">
          <el-table ref="multipleTable" height='300' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column label="序号" align="center" width="60">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="制单日期" sortable>
            </el-table-column>
            <el-table-column prop="name" label="合同量（份）" sortable>
            </el-table-column>
            <el-table-column prop="name" label="合同额度（元）" sortable>
            </el-table-column>
            <el-table-column prop="name" label="实收额度（元）" sortable>
            </el-table-column>
            <el-table-column prop="name" label="未收额度（元）" sortable>
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
  name: 'person_pact',
  data() {
    return {
      search_name: '',
      data_value: '年度合同统计',
      tableData: [
        {
          name: '金琪',
          pact_num: '1',
          pact_per: '0.29%',
          pact_money: '420909'
        },
        {
          name: '刘广玥',
          pact_num: '84',
          pact_per: '24.42%',
          pact_money: '420909'
        },
        {
           name: '纪华楠',
          pact_num: '5',
          pact_per: '1.45%',
          pact_money: '420909'
        },
        {
           name: '李通',
          pact_num: '1',
          pact_per: '0.29%',
          pact_money: '420909'
        },
        {
          name: '张梦琪',
          pact_num: '1',
          pact_per: '0.29%',
          pact_money: '420909'
        },
        {
          name: '刘晓琴',
          pact_num: '8',
          pact_per: '2.33%',
          pact_money: '420909'
        },
        {
          name: '林嘉琪',
          pact_num: '5',
          pact_per: '1.45%',
          pact_money: '420909'
        },
        {
          name: '秦延涛',
          pact_num: '16',
          pact_per: '4.65%',
          pact_money: '420909'
        },
        {
          name: '谢超',
          pact_num: '1',
          pact_per: '0.29%',
          pact_money: '420909'
        },
        {
          name: '王营营',
          pact_num: '14',
          pact_per: '4.07%',
          pact_money: '420909'
        },
        {
          name: '窦雪',
          pact_num: '4',
          pact_per: '1.16%',
          pact_money: '420909'
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: '选项1',
          label: '年度合同统计'
        }, 
        {
          value: '选项2',
          label: '年度合同统计'
        }, 
        {
          value: '选项3',
          label: '年度合同统计'
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
    }
  },
  methods: {
    // 第一个柱状
    initBar () {
      var option = {
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['合同量']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2019-01', '2019-02','2019-03','2019-04','2019-05', '2019-06','2019-07','2019-08', '2019-09','2019-10','2019-11'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        grid: {   // 右边显示不全设置外距离
          right: 150 
        },
        yAxis: [
            {
              type: 'value',
              name: '合同量（份）',
              min: 0,
              max: 120,
              interval: 20,
              axisLabel: {
                formatter:  '{value}'
              }
            },
            {
              type: 'value',
              name: '合同金额（元）',
              min: 0,
              max: 120000000000,
              interval: 20000000000,
              axisLabel: {
                formatter: '{value} '
              }
            }
        ],
        series: [
            {
              name: '合同量',
              type: 'bar',
              itemStyle: {
                normal: { color:'#70CFF5' },
              },
              data: [3,3,45,25,110,62,65,38,36,34,32]
            },
            {
              name: '合同金额',
              type: 'line',
              showSymbol: false, // 去掉焦点的小圆点
              itemStyle: {
                normal: { color:'#E49E9A' },
              },
              yAxisIndex: 1,
              data: [1000000000, 1000000000,1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 3000000000, 110000000000, 1000000000, 1000000000]
            }
        ]
      }
      return option
    },

    // 第二饼
    initCookie () {
      // 绘制图表
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          text: '2019年合同总量：465',
          left: 'center',
          textStyle: {
            color: '#333'
          }
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['2019-01', '2019-02','2019-03','2019-04','2019-05', '2019-06','2019-07','2019-08', '2019-09','2019-10','2019-11']
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
              { value: 45, name: '2019-01' },
              { value: 310, name: '2019-02' },
              { value: 45, name: '2019-03' },
              { value: 310, name: '2019-04' },
              { value: 45, name: '2019-05' },
              { value: 310, name: '2019-06' },
              { value: 45, name: '2019-07' },
              { value: 310, name: '2019-08' },
              { value: 310, name: '2019-09' },
              { value: 45, name: '2019-10' },
              { value: 310, name: '2019-11' },
              { value: 310, name: '2019-12' },
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
                    '#2FAAE5', '#D0645F', '#F79910', '#F7DE0D', '#F98C57', '#D84E42','#99D4FE', '#DC81DC', '#4BD039', '#77A2EF', '#F87BBE', '#BE66D7'
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
    // 第一个柱状
    let barChart = echarts.init(document.getElementById('myChart'))
    barChart.setOption(this.initBar())
    // 第二饼
    let cookieChart = echarts.init(document.getElementById('cookieChart'))
    cookieChart.setOption(this.initCookie())
      
      // 响应式处理
    window.addEventListener("resize", () => { 
      barChart.resize()
      cookieChart.resize()
    })
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
  height: 45%;
  box-sizing: border-box;
  .left {
    width: 60%;
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
      width: 100%;
      margin-top: 60px;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    margin-right: 25px;
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
      width: 100%;
      margin-top: 60px;
    }
  }
}

.my-table {
  padding-left: 15px;
  padding-right: 40px;
  margin-top: 30px;
  box-sizing: border-box;
  margin-bottom: 100px;
  .right {
    width: 100%;
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
      width: 100%;
      margin-top: 60px;
      
    }
    .page {
      text-align: center;
      padding: 20px 0;
    }
  }
}



</style>