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

      data: [
        {
          value: 60,
          symbolBoundingData: 80,
          symbolPosition: "end",
          symbolSize: [48,500],
          symbolRepeat: true,
          symbolClip: false,
          symbol: "image://./line_long.png",
          symbolMargin: 0
        },
        {
          value: 58 - 37,
          symbolBoundingData: 58,
          symbolClip: true,
          symbolPosition: '',
          symbol: "image://./line_long.png",
        },
        {
          value: 65 - 38,
          symbolBoundingData: 65,
          symbol: "image://./line_long.png",
        },
        {
          value: 100,
          symbol: "image://./line_long.png",
        }
      ]
    }
  ]
};

myChart.setOption(option);
