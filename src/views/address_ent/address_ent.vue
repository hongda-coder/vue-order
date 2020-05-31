<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">地区委托分布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->

    <div class="content">
      <!-- 表格 -->
      <div class="select_time">
        <span>
          <el-form>
            <el-form-item label="地区" class="time">
              <div class="block">
                <el-cascader :options="options" v-model="selectedOptions" @change="handleChange" :separator="' '" style="width: 250px"></el-cascader>
              </div>
            </el-form-item>
          </el-form>
          <el-form style="margin-left: 20px;">
            <el-form-item label="制单月份" class="time">
              <div class="block">
                <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" style='width:350px; margin-right: 20px;'>
                </el-date-picker>
                <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;" icon="el-icon-search" class="btn">搜索</el-button>
              </div>
            </el-form-item>
          </el-form>
        </span>
        <div class="all_count">
          <p class="money-count">总金额： 956000</p>
          <el-form>
            <div class="block">
              <el-button v-waves style="width:90px;" type="danger" plain>导出</el-button>
            </div>
          </el-form>
        </div>
        <div class="left">
          <div class="title">
            地区委托分布合同表
          </div>
          <div class="table">
            <el-table ref="multipleTable" height='100%' border :data="tableData" tooltip-effect="dark" style="width: 100%;border-top: 1px solid #EBEEF5" :cell-style="{padding:'15px 0'}" @selection-change="handleSelectionChange">
              <el-table-column label="序号" width="60" align="center">
                <template slot-scope="scope">{{scope.$index+1}}</template>
              </el-table-column>
              <el-table-column prop="name" sortable label="省">
              </el-table-column>
              <el-table-column prop="pact_num" sortable label="市">
              </el-table-column>
              <el-table-column prop="pact_per" sortable label="县">
              </el-table-column>
              <el-table-column prop="pact_money" sortable label="合同数量">
              </el-table-column>
            </el-table>
          </div>
          <div class="page">
            <el-pagination background layout="prev, pager, next" :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>

      <!-- 地图 -->
      <div class="address">
        <el-form>
          <el-form-item label="公司名称" class="time">
            <div class="block">
              <el-input placeholder="请输入公司名称" v-model="keyword" style="width: 250px; margin-right: 20px;" clearable> </el-input>
              <el-button v-waves type="primary" style="width:100px;margin-top: -0.02rem;" icon="el-icon-search" class="btn">搜索</el-button>
            </div>
          </el-form-item>
        </el-form>
        <!-- 地图 -->
        <div class="map">
          <BaiduMap :center="center" :zoom="zoom" class="bm-view">
            <!-- 比例 -->
            <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT"></bm-scale>
            <!-- 缩放 -->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!-- 定位 -->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>
            <!-- 搜索 -->
            <div class="search">
              <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>
            </div>
          </BaiduMap>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import echarts from 'echarts'
import options from './data/data'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: "address_ent",
  components: {
    BaiduMap
  },
  data() {
    return {
      selectedOptions: [],//存放默认值
      options: options,   //存放城市数据
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
      value2: '',
      company_name: '',
      center: { lng: 116.404, lat: 39.915 },
      zoom: 15,
      location: '广州',
      keyword: ''
    }
  },
  methods: {
    // 地区
    handleChange() {
      console.log('地区')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    // this.createMap();
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
.content {
  display: flex;
  height: 80%;
  .select_time {
    width: 1030px;
    margin-right: 50px;
    padding: 15px 0 0px 15px;
    > span {
      display: flex;
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
      .block {
        display: flex;
      }
    }
    .all_count {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .money-count {
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
    .left {
      border: 3px solid #f0f0f0;
      height: 94.5%;
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
      .table {
        height: 85%;
        overflow: auto;
      }
    }
    .page {
      text-align: center;
      padding: 30px 0;
      box-sizing: border-box;
    }
  }
  .address {
    flex: 1;
    padding: 15px 0 0px 15px;
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
    .map {
      padding-right: 30px;
      box-sizing: border-box;
      height: 100%;
      .bm-view {
        width: 100%;
        height: 100%;
      }
    }
  }
  .search {
    position: absolute;
    top: 10%;
  }
}
</style>
