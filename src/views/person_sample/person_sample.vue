<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">个人采样统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 人员选择 -->
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
              <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;margin-left: 20px;" icon="el-icon-search" class="btn">搜索</el-button>
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
      <div class="right left">
        <div class="title">
          采样人员工作量统计表
        </div>
        <div class="table">
          <el-table ref="multipleTable" height='100%' border :data="tableData" tooltip-effect="dark" style="width: 100%" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
            <el-table-column label="序号" align="center">
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable>
            </el-table-column>
            <el-table-column prop="sample_num" label="样品量(批次)" sortable min-width="110px">
            </el-table-column>
            <el-table-column prop="sample_per" label="样品占比" sortable min-width="110px">
            </el-table-column>
          </el-table>
        </div>
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="left">
        <div class="title">
          采样人员工作量统计表比率
        </div>
        <!-- 饼状图 -->
        <div class="rate">
          <div id="myChart" style="width: 100%;height:440px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import echarts from 'echarts'
export default {
  name: 'person_sample',
  data() {
    return {
      value1: '',
      value2: '',
      search: '',
      tableData: [
        {
          name: '金琪',
          sample_num: '1',
          sample_per: '0.29%',
        },
        {
          name: '刘广玥',
          sample_num: '84',
          sample_per: '24.42%'
        },
        {
           name: '纪华楠',
          sample_num: '5',
          sample_per: '1.45%'
        },
        {
           name: '李通',
          sample_num: '1',
          sample_per: '0.29%'
        },
        {
          name: '张梦琪',
          sample_num: '1',
          sample_per: '0.29%'
        },
        {
          name: '刘晓琴',
          sample_num: '8',
          sample_per: '2.33%'
        },
        {
          name: '林嘉琪',
          sample_num: '5',
          sample_per: '1.45%'
        },
        {
          name: '秦延涛',
          sample_num: '16',
          sample_per: '4.65%'
        },
        {
          name: '谢超',
          sample_num: '1',
          sample_per: '0.29%'
        },
        {
          name: '王营营',
          sample_num: '14',
          sample_per: '4.07%'
        },
        {
          name: '窦雪',
          sample_num: '4',
          sample_per: '1.16%'
        }
      ],
      multipleSelection: [],
      value5: '',
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
    }
  },
  methods: {
    initCharts () {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        title: {
          title: '总采样量(批次): 344',
          left: 'center',
          textStyle: {
            color: '#333'
          }
        },
        color:['#70CEF6 ', '#E59F9B', '#FBC553', '#FCED4F','#FCBC99 ', '#C5E8FD', '#E9B7EA', '#91E37F','#ACCBF7', '#FAB2DC', '#DCA1EA', '#E7A3A3'],
        legend: {
          orient: 'vertical',
          right: 0,
          data: ['金琪', '刘广玥', '纪华楠', '李通','张梦琪', '刘晓琴', '林嘉琪', '秦延涛','谢超', '王营营', '窦雪', '汪栋']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '30%'],
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
              show: true
            },
            data: [
              {value: 11, name: '金琪'},
              {value: 84, name: '刘广玥'},
              {value: 15, name: '纪华楠'},
              {value: 12, name: '李通'},
              {value: 11, name: '张梦琪'},
              {value: 10, name: '刘晓琴'},
              {value: 15, name: '林嘉琪'},
              {value: 16, name: '秦延涛'},
              {value: 11, name: '谢超'},
              {value: 14, name: '王营营'},
              {value: 14, name: '窦雪'},
              {value: 103, name: '汪栋'}

            ]
          }
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

    // // 联动选择
    ispChange(values, items) {
      this.outputs.values = values;
      this.outputs.items = items;
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
    width: 50%;
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
    width: 50%;
    height: 100%;
    margin-right: 25px;
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