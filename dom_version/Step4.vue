<template>
  <div class="step4">
    <div class="user">
      <div class="left">
        <img src="../../../assets/images/comparative/arrowgreen.png" alt>
        大宝
      </div>
      <div class="right">
        小宝
        <img src="../../../assets/images/comparative/arrowYellow.png" alt>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-x">
        <template v-for="i in 5">
          <el-tooltip
            v-if="'加减乘除等混合加减乘除等混合'.length>7"
            effect="light"
            content="加减乘除等混合加减乘除等混合"
            placement="top"
            :key="i"
          >
            <div class="x-title">{{getShortTitle('加减乘除等混合加减乘除等混合')}}</div>
          </el-tooltip>
          <div v-else class="x-title" :key="i">{{'加减乘除等混合加减乘除等混合'}}</div>
        </template>
      </div>
      <div class="chart-y">
        <div class="y-title">100%</div>
        <div class="y-title">80%</div>
        <div class="y-title">60%</div>
        <div class="y-title">40%</div>
        <div class="y-title">20%</div>
        <div class="y-title-0">0%</div>
      </div>
      <div class="chart-y-line">
        <div class="y-line"></div>
        <div class="y-line"></div>
        <div class="y-line"></div>
        <div class="y-line"></div>
        <div class="y-line"></div>
      </div>
      <div class="chart-inner">
        <div class="chart-box">
          <div class="chart-line chart-line-blue" style="top:25%;bottom:20%;">
            <div class="chart-line-text chart-line-text-top">75%</div>
            <div class="chart-line-text chart-line-text-bottom">20%</div>
            <img
              class="chart-line-arrow"
              src="../../../assets/images/comparative/arrow_top_blue.png"
              alt
            >
            <div class="chart-line-body"></div>
          </div>
          <div
            class="chart-line chart-line-yellow chart-line-reverse"
            style="top: 20%;bottom:15%;left: 50%;"
          >
            <div class="chart-line-text chart-line-text-top">80%</div>
            <div class="chart-line-text chart-line-text-bottom">15%</div>
            <img
              class="chart-line-arrow"
              src="../../../assets/images/comparative/arrow_top_yellow.png"
              alt
            >
            <div class="chart-line-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/custom";

export default {
  name: "ComparativeStep4",
  data() {
    return {
      myEchart: null,
      chartData: [
        //学习效率指数, 对应TMA等等
        {
          //大宝
          LEI: 29,
          TMA: 35,
          PFI: 50,
          CRC: 45,
          SOL: 56
        },
        {
          //二宝
          LEI: 29,
          TMA: 35,
          PFI: 50,
          CRC: 45,
          SOL: 56
        }
      ]
    };
  },
  mounted() {},
  methods: {
    generateData: function(data) {},
    getShortTitle(title) {
      if (title.length > 7) {
        return title.substr(0, 6) + " ...";
      } else {
        return title;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.step4 {
  height: 100%;
  .chart-container {
    width: 70vw;
    height: 25vw;
    border-left: 1px solid #13c7f6;
    border-bottom: 1px solid #13c7f6;
    margin-left: 10vw;
    margin-top: 2vw;
    position: relative;
    .chart-x {
      position: absolute;
      width: 100%;
      height: 4vw;
      bottom: -6vw;
      color: white;
      display: flex;
      text-align: center;
      .x-title {
        width: 20%;
        font-size: 1.2vw;
      }
    }
    .chart-y {
      position: absolute;
      left: -10vw;
      top: -0.5vw;
      bottom: 0.5vw;
      color: white;
      display: flex;
      flex-direction: column;
      width: 8vw;
      align-items: flex-end;
      .y-title {
        height: 20%;
      }
      .y-title-0 {
        height: 0;
      }
    }
    .chart-y-line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      z-index: 1;
      .y-line {
        width: 100%;
        height: 20%;
        border-top: 1px dashed #13c7f6;
      }
    }
    .chart-inner {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      .chart-box {
        position: relative;
        width: 20%;
        height: 100%;
        display: flex;
        .chart-line {
          position: absolute;
          width: 30%;
          display: flex;
          flex-direction: column;
          .chart-line-text {
            position: absolute;
            height: 3vw;
            width: 100%;
            text-align: center;
            line-height: 3vw;
          }
          .chart-line-text-top {
            top: -3vw;
          }
          .chart-line-text-bottom {
            bottom: -3vw;
          }
          .chart-line-arrow {
            &::after {
              content: "";
              width: 0;
              height: 0;
              font-size: 0;
            }
          }
          .chart-line-body {
            flex: 1;
            background-position-x: center;
            background-size: 50%;
            background-repeat: repeat-y;
            background-color: transparent;
          }
        }
        .chart-line-reverse {
          flex-direction: column-reverse;
          .chart-line-arrow {
            transform: rotate(180deg);
          }
        }
        .chart-line-blue {
          .chart-line-text {
            color: #00ffff;
          }
          .chart-line-body {
            background-image: url("../../../assets/images/comparative/arrow_repeat_blue.png");
          }
        }
        .chart-line-yellow {
          .chart-line-text {
            color: #fff681;
          }
          .chart-line-body {
            background-image: url("../../../assets/images/comparative/arrow_repeat_yellow.png");
          }
        }
      }
    }
  }
  .user {
    padding-top: 2vw;
    width: 70%;
    margin: 0 auto;
    display: flex;
    img {
      height: 2vw;
    }
    .left,
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
      flex: 1;
    }
    .left {
      color: #00ffff;
    }
    .right {
      color: #fff681;
    }
  }
}
</style>
