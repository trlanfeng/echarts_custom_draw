var myChart = echarts.init(document.getElementById("main"));

var option = {
  title: {
    text: "ECharts 入门示例"
  },
  tooltip: {},
  legend: {
    data: ["销量"]
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫"]
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "pictorialBar",
      symbolPosition: "end",
      symbolRepeat: true,
      symbolRepeatDirection: 'start',
      symbolSize: [24, 14],
      symbolOffset: [0,0],
    //   symbolMargin: 20,
    //   symbolClip: true,
      symbol: "image://./arrow_repeat.png",
      symbolMargin: 0,
      data: [
        {
          value: 74-49,
          symbolBoundingData: 74
        },
        {
          value: 58-37,
          symbolBoundingData: 58
        },
        {
          value: 65-38,
          symbolBoundingData: 65
        }
      ]
    },
    {
      name: "销量222",
      type: "pictorialBar",
      symbolPosition: "end",
      symbolSize: [48, 20],
      symbol: "image://./arrow_top.png",
      data: [
        {
          value: 74
        },
        {
          value: 58
        },
        {
          value: 65
        }
      ]
    },{
      name: "销量222",
      type: "pictorialBar",
      symbolPosition: "start",
      symbolClip: true,
      symbol: 'none',
      z: 10,
      data: [
        {
          value: 49
        },
        {
          value: 58
        },
        {
          value: 65
        }
      ]
    }
  ]
};

myChart.setOption(option);
