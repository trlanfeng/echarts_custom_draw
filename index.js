var myChart = echarts.init(document.getElementById("main"));

/**
 * 生成完整箭头图形
 * 通过指定高度，计算除箭头外，箭体需要重复的次数，ceil向上取整，
 * 之后等比缩放到合适的高度，进行拼接返回
 * @param {Number} height 要生成的箭头的高度
 * @param {Number} direction 箭头的方向，1向上，-1向下
 * @param {String} color 箭头对应的图片颜色
 */
var generateArrow = function (height, direction) {
    var arrow_width = 48,
        arrow_height = 20,
        repeat_width = 24,
        repeat_height = 14;
    var color = direction === 1 ? 'blue' : 'yellow';
    var img_top_src = "./arrow_top_" + color + ".png";
    var img_repeat_src = "./arrow_repeat_" + color + ".png";
    var count = Math.ceil((height - arrow_height) / repeat_height);
    var scale_y = (height - arrow_height) / (repeat_height * count);
    // console.log("scale_y:", scale_y);
    var imgArr = [];
    var img_arrow = {
        type: "image",
        style: {
            image: img_top_src
        },
        z: 10
    };
    if (direction === -1) {
        img_arrow.position = [0, Math.floor(count * repeat_height * scale_y)];
        img_arrow.origin = [arrow_width / 2, arrow_height / 2];
        img_arrow.rotation = Math.PI;
    }
    imgArr.push(img_arrow);
    var repeat_offset = 20;
    if (direction === -1) {
        repeat_offset = 0;
    }
    for (let i = 0; i < count; i++) {
        imgArr.push({
            type: "image",
            position: [
                (arrow_width - repeat_width) / 2,
                i * repeat_height * scale_y + repeat_offset
            ],
            scale: [1, scale_y],
            style: {
                image: img_repeat_src
            }
        });
    }
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
        data: ["衬衫", "羊毛衫", "雪纺衫"]
    },
    yAxis: {},
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
                    children: generateArrow(Math.abs(start[1] - end[1]), api.value(3))
                };
            },
            data: [[0, 48, 75, 1], [1, 88, 27, -1]]
        }
    ]
};

myChart.setOption(option);
