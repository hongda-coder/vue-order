<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">项目进度表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->
    <div class="select_time">
      <span>
        <el-form>
          <el-form-item label="任务单号" class="time">
            <div class="block">
              <el-input v-model="input" placeholder="请输入任务单号" style="margin-right: 20px;width:5rem"></el-input>
            </div>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="下单日期" class="time">
            <div class="block">
              <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px;margin-right: 20px;'>
              </el-date-picker>
            </div>
          </el-form-item>
        </el-form>
        <el-form>
          <el-form-item label="合同编号" class="time">
            <div class="block">
              <el-input v-model="input" placeholder="请输入项目编号" style="margin-right: 20px;width:5rem"></el-input>
              <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;" icon="el-icon-search" class="btn">搜索</el-button>
            </div>
          </el-form-item>
        </el-form>
      </span>
    </div>
    <!-- item -->
    <div class="item">
      <div>
        <span>预警期</span>
        <span>未完成</span>
        <span>0</span>
      </div>
      <div style="background: #d47e7a;">
        <span>超期</span>
        <span>未完成</span>
        <span style="background: #d47e7a;">0</span>
      </div>
      <div style="background: #52a8e6;">
        <span>任务</span>
        <span>进行中</span>
        <span style="background: #52a8e6;">0</span>
      </div>
      <div style="background: #cdcdcd;">
        <span>任务</span>
        <span>已完成</span>
        <span style="background: #cdcdcd;">0</span>
      </div>
    </div>
    <!-- 饼状图--列表 -->
    <div class='list'>
      <div class="flex">
        <div class="left">
          <div class="left-item">
            <div class="title">项目名称</div>
            <div class="name color">废水</div>
          </div>
          <div class="left-item">
            <div class="title">任务单号</div>
            <div class="name">191216030</div>
          </div>
          <div class="left-item">
            <div class="title">受检单位</div>
            <div class="name">杭州和源精密工具有限公司</div>
          </div>
        </div>
        <div class="right">
            <el-steps :space="200" :active="6" style="width: 100%" class="step">
              <el-step title="已送达" description="2019-12-06"></el-step>
              <el-step title="已采样" description=""></el-step>
              <el-step title="已接样" description=""></el-step>
              <el-step title="已检测" description=""></el-step>
              <el-step title="报告编制" description=""></el-step>
              <el-step title="报告签发" description="2019-12-12"></el-step>
              <el-step title="已归档" description=""></el-step>
            </el-steps>
        </div>
      </div>
      <div class="flex">
        <div class="left">
          <div class="left-item">
            <div class="title">项目名称</div>
            <div class="name color">废水</div>
          </div>
          <div class="left-item">
            <div class="title">任务单号</div>
            <div class="name">191216030</div>
          </div>
          <div class="left-item">
            <div class="title">受检单位</div>
            <div class="name">杭州和源精密工具有限公司</div>
          </div>
        </div>
        <div class="right">
            <el-steps :space="200" :active="1" style="width: 100%" class="step">
              <el-step title="已送达" description="2019-12-06"></el-step>
              <el-step title="已采样" description=""></el-step>
              <el-step title="已接样" description=""></el-step>
              <el-step title="已检测" description=""></el-step>
              <el-step title="报告编制" description=""></el-step>
              <el-step title="报告签发" description="2019-12-12"></el-step>
              <el-step title="已归档" description=""></el-step>
            </el-steps>
        </div>
      </div>
      <div class="flex">
        <div class="left">
          <div class="left-item">
            <div class="title">项目名称</div>
            <div class="name color">废水</div>
          </div>
          <div class="left-item">
            <div class="title">任务单号</div>
            <div class="name">191216030</div>
          </div>
          <div class="left-item">
            <div class="title">受检单位</div>
            <div class="name">杭州和源精密工具有限公司</div>
          </div>
        </div>
        <div class="right">
            <el-steps :space="200" :active="1" style="width: 100%" class="step">
              <el-step title="已送达" description="2019-12-06"></el-step>
              <el-step title="已采样" description=""></el-step>
              <el-step title="已接样" description=""></el-step>
              <el-step title="已检测" description=""></el-step>
              <el-step title="报告编制" description=""></el-step>
              <el-step title="报告签发" description="2019-12-12"></el-step>
              <el-step title="已归档" description=""></el-step>
            </el-steps>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: "task_query_speed",
  data() {
    return {
      input: "",
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

.list {
    padding: 0 15px 0 15px;
    box-sizing: border-box;
  .flex {
    display: flex;
    border: 2px solid #ccc;
    margin-top: 30px;
    .left {
      width: 30%;
      min-width: 300px;
      .left-item {
        display: flex;
        border-bottom: 2px solid #ccc;
        line-height: 80px;
        &:last-of-type{
          border: none;
        }
        .title {
          width: 38%;
          text-align: center;
          background: #EFEFEF;
          color: #514C49;
          border-right: 2px solid #ccc;
          font-size: 17px;
        }
        .name {
          flex: 1;
          padding-left: 20px;
          box-sizing: border-box;
          color: #514C49;
          border-right: 2px solid #ccc;
          font-size: 17px;
        }
        .color {
          color: #F8CE8F;
        }
      }
      
    }
    .right {
      width: 100%;
      /deep/.el-steps--horizontal {
        position: relative;
        margin-top: 80px;
        margin-left: 80px;
        padding-right: 80px;
        box-sizing: border-box;
        &::before{
          position: absolute;
          content: '';
          width: 50px;
          left: -56px;
          top: 30px;
          height: 10px;
          background: #23A8F2;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &::after {
          content: '环境适用';
          position: absolute;
          top: -38px;
          left: -16px;
          width: 100px;
          text-align: center;
          font-size: 20px;
          color: #23A8F2;
        }
        .el-step__head.is-finish {
          .el-step__line {
            position: absolute;
            border-color: inherit;
            background-color: #f2f2f2;
            border-color: #f2f2f2;
            height: 10px;
            top: 30px;
            left: 83px;
            right: 5px;
            border-radius: 30px;
            .el-step__line-inner {
              display: block;
              border-width: 0.01333rem;
              border-style: solid;
              border-color: #23A8F2!important;
              -webkit-transition: .15s ease-out;
              transition: .15s ease-out;
              box-sizing: border-box;
              height: 10px!important;
              background: #23A8F2!important;
            }
          }
          /deep/ .is-text {
            border: 40px solid #23A8F2;
            .el-step__icon-inner {
              padding: 8px 12px;
              background: #fff;
              display: block;
              color: #23A8F2;
              border-radius: 50%;
              font-size: 20px;
              .el-step__icon-inner {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .el-step__head.is-process {
            .el-step__line {
              position: absolute;
              border-color: inherit;
              background-color: #f2f2f2;
              border-color: #f2f2f2;
              height: 10px;
              top: 30px;
              left: 65px;
              right: 5px;
              border-radius: 30px;
            }
            /deep/ .is-text {
              border: 40px solid #f2f2f2;
              .el-step__icon-inner {
                padding: 8px 12px;
                background: #fff;
                display: block;
                color: #959595;
                border-radius: 50%;
                font-size: 20px;
                .el-step__icon-inner {
                  width: 30px;
                  height: 30px;
                }
              }
            }
          }
        .el-step__head.is-wait {
          .el-step__line {
            position: absolute;
            border-color: inherit;
            background-color: #f2f2f2;
            border-color: #f2f2f2;
            height: 10px;
            top: 30px;
            left: 45px;
            right: 5px;
            border-radius: 30px;
          }
        }
        .is-horizontal {
          position: relative;
          .el-step__main {
            position: absolute;
            left: 0;
            width: 100px;
            transform: translateX(-10%);
            .el-step__title {
              width: 100%;
              text-align: center;   
            }
            .el-step__title.is-process,.el-step__title.is-wait {
              color: #909090;
              font-weight: 500;
            }
            .el-step__description {
              padding: 0;
              width: 100%;
              text-align: center;
              color: #909090;
            }
            .el-step__description.is-finish {
              color: #23A8F2;
            }
          }
        }
        .el-step__head.is-wait {
          /deep/ .is-text {
            border: 40px solid #f2f2f2;
            .el-step__icon-inner {
              padding: 8px 12px;
              background: #fff;
              display: block;
              color: #959595;
              border-radius: 50%;
              font-size: 20px;
              .el-step__icon-inner {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }
    }
  }
}

.item {
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  > div {
    margin-bottom: 20px;
    width: 13%;
    height: 80px;
    background: #e5a650;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border-radius: 5px;
    position: relative;
    margin-right: 30px;
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
