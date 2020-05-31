<!-- home -->
<template>
  <div class="app-container">
    <div class="box">
      <div class="t1">
        <div class="t1-1">
          <template v-if="showTab == 'tab1'">
            <div class="div div1" v-for="(item,index) in data.renwu.today" :key="index">
              <h1>{{item.title}}</h1>
              <div class="day-box">
                <div class="day1">
                  <p>{{item.name1}}</p>
                  <p class="p1">
                    <countTo :startVal="startVal" :endVal="item.name1_num" :duration="3000"></countTo>
                  </p>
                </div>
                <div class="day2">
                  <p>{{item.name2}}</p>
                  <p class="p2">
                    <countTo :startVal="startVal" :endVal="item.name2_num" :duration="3000"></countTo>
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template v-if="showTab == 'tab2'">
            <div class="div div1" v-for="(item,index) in data.renwu.week" :key="index">
              <h1>{{item.title}}</h1>
              <div class="day-box">
                <div class="day1">
                  <p>{{item.name1}}</p>
                  <p class="p1">
                    <countTo :startVal="startVal" :endVal="item.name1_num" :duration="3000"></countTo>
                  </p>
                </div>
                <div class="day2">
                  <p>{{item.name2}}</p>
                  <p class="p2">
                    <countTo :startVal="startVal" :endVal="item.name2_num" :duration="3000"></countTo>
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template v-if="showTab == 'tab3'">
            <div class="div div1" v-for="(item,index) in data.renwu.month" :key="index">
              <h1>{{item.title}}</h1>
              <div class="day-box">
                <div class="day1">
                  <p>{{item.name1}}</p>
                  <p class="p1">
                    <countTo :startVal="startVal" :endVal="item.name1_num" :duration="3000"></countTo>
                  </p>
                </div>
                <div class="day2">
                  <p>{{item.name2}}</p>
                  <p class="p2">
                    <countTo :startVal="startVal" :endVal="item.name2_num" :duration="3000"></countTo>
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="t1-2">
          <div class="line">
            <span class="span1" :class="showTab=='tab1'?'active':''" @click="tab1()" v-waves>
              今
              <br />天
            </span>
            <span class="span2" :class="showTab=='tab2'?'active':''" @click="tab2()" v-waves>
              本
              <br />周
            </span>
            <span class="span3" :class="showTab=='tab3'?'active':''" @click="tab3()" v-waves>
              本
              <br />月
            </span>
          </div>
        </div>
        <div class="t1-3">
          <el-scrollbar style="width:100%;height:100%;">
            <div class="con" v-for="(item,index) in data.warning.today" :key="index">
              <div class="title">
                <span>
                  <i class="el-icon-bell"></i> 预警信息
                </span>
                <span>
                  更新于：2020-05-09 12:00:00
                  <i class="el-icon-refresh"></i>
                </span>
              </div>
              <!-- 超期质检任务 -->
              <div class="cqzj">
                <div class="div1">超期质检任务</div>
                <div class="div2">
                  超期任务数：
                  <countTo :startVal="startVal" :endVal="4" :duration="3000"></countTo>条
                </div>
              </div>
              <div class="xian"></div>
              <div class="xieyi">
                <div class="div1">协议情况</div>
                <div class="div2">
                  到期协议：
                  <countTo :startVal="startVal" :endVal="1" :duration="3000"></countTo>份
                </div>
                <div class="div3">
                  协议次数超支的协议数量：
                  <countTo :startVal="startVal" :endVal="2" :duration="3000"></countTo>份
                </div>
                <div class="div4">
                  协议金额超支的协议数量：
                  <countTo :startVal="startVal" :endVal="5" :duration="3000"></countTo>份
                </div>
              </div>
              <div class="xian"></div>
              <div class="xieyi2">
                <div class="div1">超期标物及易耗品</div>
                <div class="div2">
                  超标物品A类：
                  <countTo :startVal="startVal" :endVal="1" :duration="3000"></countTo>份
                </div>
                <div class="div3">
                  超标物品B类：
                  <countTo :startVal="startVal" :endVal="2" :duration="3000"></countTo>份
                </div>
                <div class="div4">
                  超标物品C类：
                  <countTo :startVal="startVal" :endVal="3" :duration="3000"></countTo>份
                </div>
              </div>
              <div class="xian"></div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <!-- 通知公告、报告统计 -->
      <div class="t2">
        <div class="t2-l">
          <el-scrollbar style="height:100%">
            <div class="title">
              <span>
                <i class="el-icon-s-order"></i> 通知公告
              </span>
              <span>
                <i class="el-icon-refresh" @click="getGongGao"></i>
              </span>
            </div>
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item v-for="(item,index) in gonggao" :key="index" :title="item.SKF1900" :name="index" class="gonggaoitem">
                <div>
                  {{item.SKF1901}}
                </div>
              </el-collapse-item>
            </el-collapse>
            <div class="fenye">
              <el-pagination background layout="prev, pager, next" :total="20"></el-pagination>
            </div>
          </el-scrollbar>
        </div>
        <div class="t2-r">
          <el-scrollbar style="height:100%">
            <!-- ------------ -->
            <div class="title">
              <span>
                <i class="el-icon-s-data"></i> 报告统计
              </span>
              <span>
                <el-radio-group v-model="radio1" v-waves @change="change">
                  <el-radio-button label="折线图"></el-radio-button>
                  <el-radio-button label="柱状图"></el-radio-button>
                </el-radio-group>
              </span>
              <span>
                <i class="el-icon-refresh"></i>
              </span>
            </div>
            <div id="main" style="width: 100%;height:240px;"></div>
          </el-scrollbar>
        </div>
      </div>
      <!-- 审批代办、文档中心 -->
      <div class="t3">
        <div class="t3-l">
          <el-scrollbar style="height:100%">
            <div class="title">
              <span>
                <i class="el-icon-s-check"></i> 审批代办
              </span>
              <span>
                <i class="el-icon-refresh"></i>
                <i class="el-icon-more"></i>
              </span>
            </div>
            <el-table :data="tableData3" border style="width: 100%;margin-top:10px;">
              <el-table-column prop="date" label="流程名称" sortable border></el-table-column>
              <el-table-column prop="name" label="申请原因" sortable></el-table-column>
              <el-table-column prop="province" label="申请人" sortable></el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">开始审核</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-scrollbar>
        </div>
        <div class="t3-r">
          <el-scrollbar style="height:100%">
            <div class="title">
              <span>
                <i class="el-icon-s-order"></i> 文档下载
              </span>
              <span>
                <i class="el-icon-refresh"></i>
              </span>
            </div>
            <div class="item">
              <ul>
                <li v-for="(item,index) in doc" :key="index">
                  <span>
                    <i class="el-icon-folder-opened"></i>
                  </span>
                  <span style="flex: 1;">
                    <p>{{item.OriFileName}}</p>
                    <p>{{item.CreateTime}}</p>
                  </span>
                  <span>
                    <i class="el-icon-download" @click="download(item.OriFileName)"></i>
                  </span>
                </li>
              </ul>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <!-- 消息通知、待办任务 -->
      <div class="t4 t3">
        <div class="t4-l t3-l">
          <el-scrollbar style="height:100%">
            <div class="title">
              <span>
                <i class="el-icon-message-solid el-icon-s-check"></i> 消息通知
              </span>
              <span>
                <i class="el-icon-refresh"></i>
                <i class="el-icon-more"></i>
              </span>
            </div>
            <el-table :data="tableData4" border style="width: 100%;margin-top:10px;">
              <el-table-column prop="date" label="标题" sortable border></el-table-column>
              <el-table-column prop="province" label="发送人" sortable></el-table-column>
              <el-table-column prop="name" label="内容" sortable></el-table-column>
              <el-table-column prop="date1" label="创建时间" sortable></el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-scrollbar>
        </div>
        <div class="t4-r t3-l">
          <el-scrollbar style="height:100%">
            <div class="title">
              <span>
                <i class="el-icon-s-flag el-icon-s-check"></i> 待办任务
              </span>
              <span>
                <i class="el-icon-refresh"></i>
              </span>
            </div>
            <el-table :data="tableData4_r" border style="width: 100%;margin-top:10px;">
              <el-table-column prop="date" label="序号" sortable border></el-table-column>
              <el-table-column prop="name" label="任务名称" sortable></el-table-column>
              <el-table-column prop="province" label="任务数量" sortable></el-table-column>
              <el-table-column prop="date1" label="超期数量" sortable></el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">执行任务</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <div class="full">
      <i class="el-icon-rank" @click="toggleFullscreen"></i>
    </div>
  </div>
</template>

<script>
import download from 'downloadjs'
import countTo from 'vue-count-to'
import echarts from 'echarts'
import screenfull from 'screenfull'
import { getGongGao, getDoc } from "@/api/home";
export default {
  data() {
    return {
      doc: [],
      data: {
        renwu: {
          today: [
            { title: '新委托', name1: '今日', name2: '超期', name1_num: 2, name2_num: 1 },
            { title: '待接样品', name1: '今日', name2: '超期', name1_num: 6, name2_num: 5 },
            { title: '待检样品', name1: '今日', name2: '超期', name1_num: 14, name2_num: 33 },
            { title: '待编报告', name1: '今日', name2: '超期', name1_num: 34, name2_num: 11 }
          ],
          week: [
            { title: '新委托', name1: '本周', name2: '超期', name1_num: 20, name2_num: 8 },
            { title: '待接样品', name1: '本周', name2: '超期', name1_num: 23, name2_num: 7 },
            { title: '待检样品', name1: '本周', name2: '超期', name1_num: 20, name2_num: 3 },
            { title: '待编报告', name1: '本周', name2: '超期', name1_num: 40, name2_num: 2 }
          ],
          month: [
            { title: '新委托', name1: '本月', name2: '超期', name1_num: 200, name2_num: 3 },
            { title: '待接样品', name1: '本月', name2: '超期', name1_num: 140, name2_num: 5 },
            { title: '待检样品', name1: '本月', name2: '超期', name1_num: 139, name2_num: 7 },
            { title: '待编报告', name1: '本月', name2: '超期', name1_num: 119, name2_num: 10 }
          ]
        },
        warning: {
          today: [{ num1: 5, num2: 0, num3: 1, num4: 2, num5: 1, num6: 1, num7: 1 }],
          week: [{ num1: 7, num2: 6, num3: 2, num4: 4, num5: 2, num6: 3, num7: 2 }],
          month: [{ num1: 10, num2: 10, num3: 8, num4: 6, num5: 2, num6: 5, num7: 9 }]
        }
      },
      gonggao: [],
      showTab: 'tab1',
      startVal: 0,
      activeName: '',
      radio1: '折线图',
      type: 'line',
      tableData3: [
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多，无法使用，体验极差',
          province: '李连杰'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '成龙'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '甄子丹'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '汪峰'
        }
      ],
      tableData4: [
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多，无法使用，体验极差',
          province: '李连杰',
          date1: '2020-5-10'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '成龙',
          date1: '2020-5-10'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '甄子丹',
          date1: '2020-5-10'
        },
        {
          date: '申请升级最新系统',
          name: '1.0系统使用bug太多',
          province: '汪峰',
          date1: '2020-5-10'
        }
      ],
      tableData4_r: [
        {
          date: '1',
          name: '升级系统',
          province: '10',
          date1: '2020-5-10'
        },
        {
          date: '2',
          name: '续签ssl',
          province: '20',
          date1: '2020-5-10'
        },
        {
          date: '3',
          name: '新增需求',
          province: '5',
          date1: '2020-5-10'
        },
        {
          date: '4',
          name: '直播间bug修复',
          province: '1',
          date1: '2020-5-10'
        }
      ]
    }
  },


  mounted() {
    this.init();
    this.getDoc();
    this.getGongGao()
    setInterval(() => {
      this.getGongGao()
    }, 1000);
  },

  methods: {
    getGongGao() {
      getGongGao().then(res => {
        this.gonggao = res;
      })
    },
    getDoc() {
      getDoc().then(res => {
        console.log(res);
        this.doc = res;
      })
    },
    handleClick(row) {
      console.log(row)
    },
    toggleFullscreen() {
      screenfull.toggle()
    },
    download(file) {
      download(`http://doc.it98k.cn/${file}`)
    },
    init() {
      var colors = ['red', '#f3d167', '#5f9ff6', '#1f254c']
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        color: colors,
        legend: {
          //配置标注的位置、样式等
          x: 'right',
          itemWidth: 30,
          textStyle: {
            color: '#fff'
          },
          padding: [10, 90, 0, 0]
        },
        tooltip: {},
        dataset: {
          dimensions: ['product', '2019', '2020'],
          source: [
            { product: '1月', '2019': 1, '2020': 2 },
            { product: '2月', '2019': 1, '2020': 6 },
            { product: '3月', '2019': 1, '2020': 7 },
            { product: '4月', '2019': 2, '2020': 7 },
            { product: '5月', '2019': 2, '2020': 8 },
            { product: '6月', '2019': 4, '2020': 2 },
            { product: '7月', '2019': 5, '2020': 4 },
            { product: '8月', '2019': 7, '2020': 6 },
            { product: '9月', '2019': 3, '2020': 8 },
            { product: '10月', '2019': 6, '2020': 10 },
            { product: '11月', '2019': 3, '2020': 9 },
            { product: '12月', '2019': 4, '2020': 10 }
          ]
        },
        xAxis: {
          type: 'category',
          name: '(月)',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: colors[2]
            }
          }
        },
        yAxis: {
          name: '单位/份',
          axisLine: {
            lineStyle: {
              color: colors[2]
            }
          },
          splitLine: {
            //配置图标内y周轴的颜色
            lineStyle: {
              color: colors[3]
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: this.type }, { type: this.type }]
      })
    },
    tab1() {
      this.showTab = 'tab1'
    },
    tab2() {
      this.showTab = 'tab2'
    },
    tab3() {
      this.showTab = 'tab3'
    },
    xiazai() {
      download('../../assets/保养发票.pdf')
    },
    change(value) {
      if (value == '折线图') {
        this.type = 'line'
        this.init()
      }
      if (value == '柱状图') {
        this.type = 'bar'
        this.init()
      }
    }
  },
  components: { countTo }
}
</script>
<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
<style lang="scss" scoped>
.app-container {
  background-color: #091c59;
  padding: 20px;

  .full {
    position: fixed;
    top: 15%;
    right: 30px;
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }
  .box {
    background: #05093b;
    .t1 {
      height: 300px;
      display: flex;
      .t1-1 {
        width: 50%;
        height: 100%;
        background-color: #0a1e56;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        .div {
          width: 49.5%;
          height: 48%;
          background: #05093b;
          color: #fff;
          h1 {
            margin: 0;
            font-size: 18px;
            padding: 10px 20px;
            border-bottom: 2px solid #1f2352;
            &::before {
              display: inline-block;
              content: '';
              width: 2px;
              height: 14px;
              background: #00c9ff;
              margin-right: 6px;
            }
          }
        }
        .div1 {
          .day-box {
            display: flex;
            justify-content: center;
            p {
              margin: 0;
            }
            .p1 {
              color: #33abff;
              font-size: 24px !important;
            }
            .p2 {
              color: #ff88b5;
              letter-spacing: 1px;
              font-size: 24px !important;
            }
            .day1,
            .day2 {
              width: 30%;
              text-align: center;
              p {
                font-size: 18px;
                font-weight: bold;
                &:first-child {
                  border-bottom: 3px solid #1f2352;
                  padding: 10px 0;
                  color: #fff;
                }
                &:nth-child(2) {
                  padding: 10px 0;
                }
              }
            }
            .day1 {
              margin-right: 60px;
            }
          }
        }
      }
      .t1-2 {
        width: 5%;
        height: 100%;
        background: #091c59;
        .line {
          border-radius: 30px;
          width: 50%;
          height: 100%;
          background: #fff;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          .active {
            background: linear-gradient(to right, #4bb0ff, #6149f6);
          }
          span {
            flex: 1;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: linear-gradient(to right, #fe8130, #f7d852);
            cursor: pointer;
            font-size: 16px;
            font-weight: 800;
          }
          .span1 {
            border-radius: 100px 100px 0 0;
            border-bottom: 1px solid #fff;
          }
          .span2 {
            border-bottom: 1px solid #fff;
          }
          .span3 {
            border-radius: 0 0 200px 200px;
          }
        }
      }
      .t1-3 {
        width: 47%;
        height: 100%;
        background: #05093b;
        /deep/ .el-scrollbar__wrap {
          overflow-x: hidden;
        }
        .con {
          padding: 10px 10px;
          box-sizing: border-box;
          background: #040b39;
          height: 100%;
          overflow: auto;
          .title {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #1f244f;
            padding-bottom: 10px;
            span {
              &:first-child {
                font-size: 18px;
                font-weight: bold;
                color: #fff;
              }
              &:nth-child(2) {
                color: #fff;
                font-size: 12px;
                i {
                  cursor: pointer;
                }
              }
            }
            .el-icon-bell {
              font-size: 18px;
              font-weight: bold;
            }
            .el-icon-refresh {
              font-weight: bold;
            }
          }
          .cqzj {
            height: 50px;
            margin: 10px 0;
            position: relative;
            div.div1 {
              position: absolute;
              top: 0;
              font-size: 18px;
              font-weight: bold;
              left: 20px;
              color: #fff;
            }
            div.div2 {
              position: absolute;
              top: 56%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            &::before {
              display: block;
              content: '';
              width: 6px;
              height: 100%;
              background: red;
              border-radius: 80px;
            }
          }
          .xian {
            width: 100%;
            height: 3px;
            background-color: #1f244f;
          }
          .xieyi {
            height: 100px;
            margin: 10px 0;
            position: relative;
            div.div1 {
              position: absolute;
              top: 0;
              font-size: 18px;
              font-weight: bold;
              left: 20px;
              color: #fff;
            }
            div.div2 {
              position: absolute;
              top: 30%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            div.div3 {
              position: absolute;
              top: 53%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            div.div4 {
              position: absolute;
              top: 78%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            &::before {
              display: block;
              content: '';
              width: 6px;
              height: 100%;
              background: #99cab6;
              border-radius: 80px;
            }
          }
          .xieyi2 {
            height: 100px;
            margin: 10px 0;
            position: relative;
            div.div1 {
              position: absolute;
              top: 0;
              font-size: 18px;
              font-weight: bold;
              left: 20px;
              color: #fff;
            }
            div.div2 {
              position: absolute;
              top: 30%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            div.div3 {
              position: absolute;
              top: 53%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            div.div4 {
              position: absolute;
              top: 78%;
              font-size: 12px;
              font-weight: bold;
              left: 20px;
              color: #999;
            }
            &::before {
              display: block;
              content: '';
              width: 6px;
              height: 100%;
              background: #fe8130;
              border-radius: 80px;
            }
          }
        }
      }
    }
    .t2 {
      display: flex;
      background: #0a1e56;
      justify-content: space-between;
      /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
      }
      .t2-l {
        width: 40.5%;
        height: 355px;
        background: #05093b;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
        .fenye {
          text-align: center;
          margin-top: 12px;
          /deep/ .btn-next,
          /deep/ .btn-prev {
            background-color: #0d1c4c;
          }
        }
        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f244f;
          padding-bottom: 10px;
          align-items: center;
          span {
            &:first-child {
              font-size: 18px;
              font-weight: bold;
              color: #fff;
            }
            &:nth-child(2) {
              color: #fff;
              .el-icon-refresh {
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
          .el-icon-bell {
            font-size: 18px;
            font-weight: bold;
          }
          .el-icon-refresh {
            font-weight: bold;
          }
        }
        /deep/ .el-collapse {
          border-top: none;
        }
        .gonggaoitem {
          /deep/ .el-collapse-item__header {
            background-color: transparent;
            border-bottom: 1px solid #1f2352;
            color: #fff;
            padding-left: 10px;
          }
          /deep/ .el-collapse-item__content {
            color: burlywood;
            padding-left: 10px;
            padding-right: 100px;
            line-height: 40px;
          }
          /deep/ .el-collapse-item__wrap {
            background-color: transparent;
            border-bottom: 1px solid #1f2352;
            padding-top: 10px;
          }
        }
      }
      .t2-r {
        width: 59%;
        height: 355px;
        background: #05093b;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f244f;
          padding-bottom: 10px;
          align-items: center;
          span {
            &:first-child {
              font-size: 18px;
              font-weight: bold;
              color: #fff;
            }
            &:nth-child(2) {
              color: #fff;
              /deep/ .el-radio-button__inner {
                // border-left: none;
                color: #fff;
                background: transparent;
                border: 1px solid #091c59;
              }
              /deep/ .el-radio-button__orig-radio:checked + .el-radio-button__inner {
                box-shadow: none;
                background: linear-gradient(to right, #4bb0ff, #6149f6);
              }
            }
            &:nth-child(3) {
              color: #fff;
              .el-icon-refresh {
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
          .el-icon-bell {
            font-size: 18px;
            font-weight: bold;
          }
          .el-icon-refresh {
            font-weight: bold;
          }
        }
      }
    }
    .t3 {
      display: flex;
      background: #0a1e56;
      justify-content: space-between;
      /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
      }
      .t3-l {
        width: 40.5%;
        height: 300px;
        background: #05093b;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f244f;
          padding-bottom: 10px;
          align-items: center;
          span {
            &:first-child {
              font-size: 18px;
              font-weight: bold;
              color: #fff;
            }
            &:nth-child(2) {
              color: #fff;
              .el-icon-refresh {
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
          .el-icon-bell {
            font-size: 18px;
            font-weight: bold;
          }
          .el-icon-refresh {
            font-weight: bold;
            cursor: pointer;
          }
          .el-icon-more {
            font-size: 18px;
            font-weight: bold;
            margin-left: 10px;
            padding-right: 10px;
            cursor: pointer;
          }
        }

        /deep/ .el-table,
        .el-table__expanded-cell {
          background-color: transparent;
        }

        /deep/ .el-table tr {
          background-color: transparent !important;
        }
        /deep/ .el-table--enable-row-transition .el-table__body td,
        .el-table .cell {
          background-color: transparent;
        }
        /deep/ .el-table th,
        .el-table tr {
          background-color: transparent;
        }
        /* 删除表格下横线 */
        /deep/ .el-table::before {
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0px;
        }
        /* 表格表头字体颜色 */
        /deep/ .el-table thead {
          color: #fff;
          font-weight: 500;
        }
        /deep/ .el-table {
          border: 1px solid #0c1f53;
        }
        /deep/ .el-table th.is-leaf {
          border: 1px solid #0c1f53;
        }
        /deep/ .el-table td,
        .el-table th.is-leaf {
          border: 1px solid #0c1f53;
        }
        /deep/ .el-table--border::after,
        .el-table--group::after {
          width: 0;
        }
      }
      .t3-r {
        width: 59%;
        height: 300px;
        background: #05093b;
        margin-top: 10px;
        padding: 10px;
        box-sizing: border-box;
        overflow-y: auto;
        .title {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #1f244f;
          padding-bottom: 10px;
          align-items: center;
          span {
            &:first-child {
              font-size: 18px;
              font-weight: bold;
              color: #fff;
            }
            &:nth-child(2) {
              color: #fff;
              .el-icon-refresh {
                font-size: 20px;
                cursor: pointer;
              }
            }
          }
          .el-icon-bell {
            font-size: 18px;
            font-weight: bold;
          }
          .el-icon-refresh {
            font-weight: bold;
            cursor: pointer;
          }
        }
        .item {
          padding-top: 10px;
          padding-left: 10px;
          ul {
            li {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-right: 20px;
              padding-bottom: 15px;
              margin-top: 10px;
              border-bottom: 1px solid #1f254c;
              cursor: pointer;

              .el-icon-folder-opened,
              .el-icon-s-order {
                font-size: 35px;
                margin-right: 20px;
                color: #fff;
              }
              .el-icon-download {
                font-size: 32px;
                color: #fff;
                cursor: pointer;
                &:hover {
                  color: orange;
                }
              }
              p {
                margin: 0;
                font-size: 16px;
                color: #fff;
                &:first-child {
                  font-size: 18px;
                  &:hover {
                    color: rgb(73, 221, 247);
                  }
                }
                &:nth-child(2) {
                  margin-top: 8px;
                }
              }
            }
          }
        }
      }
    }
    .t4 {
      display: flex;
      background: #0a1e56;
      justify-content: space-between;
      .t4-l {
        width: 40.5%;
        height: 300px;
        background: #05093b;
        margin-top: 10px;
      }
      .t4-r {
        width: 59%;
        height: 300px;
        background: #05093b;
        margin-top: 10px;
      }
    }
  }
  /deep/ .el-table {
    color: rgb(199, 199, 199);
  }
  .div2,
  .div3,
  .div4 {
    span {
      color: rgb(138, 210, 252);
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
