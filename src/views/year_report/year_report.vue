<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">年度报告统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

     <!-- 制单日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="签发日期" class="time">
            <div class="block">
              <el-date-picker v-model="data_value" type="month" placeholder="选择日期"> </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <el-form style="margin-left: 20px;">
          <el-form-item label="统计类型" class="time">
            <div class="block">
              <el-select v-model="search_name" placeholder="请选择统计类型" style="width: 300px;">
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
          2019年度报告类型统计  
        </div>
        <!-- 统计图 -->
        <div class="rate">
          <div id="myChart" style="width: 100%;height:300px;"></div>
        </div>
      </div>

      <div class="right " style="margin-left:20px;">
        <div class="title">
          2019年度报告类型统计比例
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
          2019年度报告类型列表             
        </div>
        <div class="table">
          <el-table ref="multipleTable" height='300' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column label="序号" align="center" width="60">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="报告类型" sortable>
            </el-table-column>
            <el-table-column prop="pact_num" label="报告数量（个）" sortable>
            </el-table-column>
            <el-table-column prop="pact_per" label="报告占比" sortable>
            </el-table-column>
            <el-table-column prop="pact_money" label="错误量（个）" sortable>
            </el-table-column>
            <el-table-column prop="error" label="差错率" sortable>
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
  name: 'year_report',
  data() {
    return {
      search_name: '',
      data_value: '年度检测统计',
      tableData: [
        {
          name: 'A',
          pact_num: '12',
          pact_per: '5.58%',
          pact_money: '1',
          error: '8.33%',
        },
        {
          name: 'Z',
          pact_num: '7',
          pact_per: '3.26%',
          pact_money: '0',
          error: '0%',
        },
        {
          name: '企业',
          pact_num: '3',
          pact_per: '1.4%',
          pact_money: '0',
          error: '0%',
        },
        {
          name: '政府',
          pact_num: '1',
          pact_per: '0.47%',
          pact_money: '0',
          error: '0%',
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: '选项1',
          label: '年度委托统计'
        }, 
        {
          value: '选项2',
          label: '年度委托统计'
        }, 
        {
          value: '选项3',
          label: '年度委托统计'
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
          data: ['无类型','A','企业','环评','B','C','无类型','D','E','F','G','H','I','J','K','L','M','M','Z']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2019-01','2019-02','2019-03','2019-04','2019-05', '2019-06','2019-07','2019-08', '2019-09','2019-10','2019-11'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        grid: {   // 右边显示不全设置外距离
          right: 1 
        },
        yAxis: [
          {
            type: 'value',
            name: '报告量（个）',
            min: 0,
            max: 80,
            interval: 20,
            axisLabel: {
              formatter:  '{value}'
            }
          }
        ],
        series: [
          {
            name: '无类型',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#70CFF5' },
            },
            data: [2,0,7,4,1,3,4,5,12,4,3]
          },
          {
            name: 'A',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#E59F9C' },
            },
            data: [2,3,0,0,1,3,6,5,0,4,3]
          },
          {
            name: '企业',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#FAC653' },
            },
            data: [2,3,6,4,1,3,0,0,12,4,3]
          },
          {
            name: '环评',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#FBED4F' },
            },
            data: [2,3,0,4,1,3,6,5,12,4,3]
          },
          {
            name: 'B',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#1FA363' },
            },
            data: [2,3,2,4,1,3,6,5,12,4,3]
          },
          {
            name: 'C',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#ff5777' },
            },
            data: [2,3,6,4,1,3,6,5,12,4,3]
          },
          {
            name: 'D',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#E02017' },
            },
            data: [2,3,0,4,1,3,4,5,12,4,3]
          },
          {
            name: 'E',
            type: 'bar',
            stack: 'one',
            itemStyle: {
              normal: { color:'#FD6F36' },
            },
            data: [2,3,0,4,1,3,4,5,12,4,3]
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
          text: '2019年报告类型占比',
          left: 'center',
          textStyle: {
            color: '#333'
          }
        },
        legend: {
          orient: 'vertical',
          right: 10,
          data: ['无类型','A','企业','环评','B','C','无类型','D','E','F','G','H','I','J','K','L','M','M','Z']
        },
        series: [
          {
            name: '报告类型统计',
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
              { value: 13, name: '无类型' },
              { value: 0, name: '企业' },
              { value: 3, name: '环评' },
              { value: 2, name: 'B' },
              { value: 5, name: 'C' },
              { value: 2, name: 'D' },
              { value: 3, name: '无类型' },
              { value: 6, name: 'E' },
              { value: 7, name: 'F' },
              { value: 1, name: 'G' },
              { value: 9, name: 'H' },
              { value: 2, name: 'I' },
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
                    '#70CFF5', '#E59F9C','#FAC653', '#FBED4F', '#1FA363'  ,'#ff5777', '#D0645F', '#FD6F36','#2FAAE5', '#D0645F','#E59F9C','#FAC653', '#FBED4F', '#1FA363'  ,'#ff5777', '#D0645F', 
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
      border-top: 2px solid #cecece;
    }
  }
}

</style>