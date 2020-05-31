<template>
  <div v-height>
    <!-- 面包屑 -->
    <div class="mianbaoxie">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>环境检测</el-breadcrumb-item>
        <el-breadcrumb-item>分析决策</el-breadcrumb-item>
        <el-breadcrumb-item class="link">客户地理分布图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 编制日期 -->

    <div class="content">
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
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: "rate_of_error",
  components: {
    BaiduMap
  },
  data() {
    return {
      selectedOptions: [],//存放默认值
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
