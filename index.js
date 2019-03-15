var myChart = echarts.init(document.getElementById("main"));

/**
 * 生成完整箭头图形
 * 通过指定高度，计算除箭头外，箭体需要重复的次数，ceil向上取整，
 * 之后等比缩放到合适的高度，进行拼接返回
 * @param {Number} height 要生成的箭头的高度
 * @param {Number} direction 箭头的方向，1向上，-1向下
 * @param {String} color 箭头对应的图片颜色：0：blue；1：yellow
 * @param {Number} from 箭头上需要显示的数字，大的显示在上方，小的在下方
 * @param {Number} to 箭头上需要显示的数字，大的显示在上方，小的在下方
 */
var generateArrow = function (height, direction, color, from, to) {
    var arrow_width = 48,
        arrow_height = 20,
        repeat_width = 24,
        repeat_height = 14;
    var colors = ['blue', 'yellow'];
    var colorsText = ['#00FFFF', '#FFF681'];
    var img_top_src = "./arrow_top_" + colors[color] + ".png";
    var img_repeat_src = "./arrow_repeat_" + colors[color] + ".png";
    var count = Math.ceil((height - arrow_height) / repeat_height);
    var scale_y = (height - arrow_height) / (repeat_height * count);
    var imgArr = [];
    // 加入箭头
    var img_arrow = {
        type: "image",
        style: {
            image: img_top_src
        },
        position: [-arrow_width / 2, 0],
        z: 10
    };
    if (direction === -1) {
        img_arrow.position = [-arrow_width / 2, Math.floor(count * repeat_height * scale_y)];
        img_arrow.origin = [arrow_width / 2, arrow_height / 2];
        img_arrow.rotation = Math.PI;
    }
    imgArr.push(img_arrow);
    // 重复箭体
    var repeat_offset = 20;
    if (direction === -1) {
        repeat_offset = 0;
    }
    for (let i = 0; i < count; i++) {
        imgArr.push({
            type: "image",
            position: [
                (arrow_width - repeat_width) / 2 - arrow_width / 2,
                i * repeat_height * scale_y + repeat_offset
            ],
            scale: [1, scale_y],
            style: {
                image: img_repeat_src
            }
        });
    }
    // 顶部文字
    imgArr.push({
        type: 'text',
        position: [0, -15],
        style: {
            text: Math.max(from, to) + '%',
            textAlign: 'center',
            font: '1em "STHeiti", sans-serif',
            fill: colorsText[color],
            textVerticalAlign: 'middle'
        }
    });
    // 底部文字
    imgArr.push({
        type: 'text',
        position: [0, height + 15],
        style: {
            text: Math.min(from, to) + '%',
            textAlign: 'center',
            font: '1em "STHeiti", sans-serif',
            fill: colorsText[color],
            textVerticalAlign: 'middle'
        }
    })
    return imgArr;
};

var option = {
    title: {
        text: "ECharts 入门示例"
    },
    tooltip: {},
    legend: {
        data: ["销量"]
    },
    xAxis: {
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 12],
            lineStyle: {
                color: '#13C7F6'
            }
        },
        axisTick: {
            show: false
        },
        data: [{
            value: "加减乘除计...",
            textStyle: {
                color: '#f00',
                fontSize: '24',
            }
        },
        { value: "乘除混合计..." },
        { value: "四则混合运..." },
        { value: "左右等式计..." },
        { value: "按括号计算..." }
        ]
    },
    yAxis: {
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 10],
            lineStyle: {
                color: '#13C7F6'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#13C7F6'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(value, index) {
                return value + '%'
            },
            color: '#f00',
            fontSize: 14,
        }
    },
    series: [
        {
            type: "custom",
            renderItem: function (params, api) {
                console.log(api.value(0));
                var start = api.coord([api.value(0), api.value(1)]);
                var end = api.coord([api.value(0), api.value(2)]);
                console.log("start:", start);
                console.log("end:", end);
                return {
                    type: "group",
                    position: [start[0], Math.min(start[1], end[1])],
                    children: generateArrow(
                        Math.abs(start[1] - end[1]),
                        api.value(3),
                        api.value(4),
                        api.value(1),
                        api.value(2)
                    )
                };
            },
            data: [
                // 序号，from，to，方向，颜色
                [0, 48, 75, 1, 0],
                [1, 88, 27, -1, 1]
            ]
        }
    ]
};

myChart.setOption(option);
