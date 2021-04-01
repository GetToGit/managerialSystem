/**
 * 关于 china map  相关的函数方法 
 **/

function optionFun(dataList) {
    const options = {
        toolTip: {
            trigger: 'item',
            formatter: (params) => {
                return params.name; // 自定义 formatter 格式
            }
        },
        visualMap: {
            min: 0,
            max: 1500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 取值范围的文字
            inRange: {
                color: ['#eoffff', '#006edd'] //取值范围的颜色
            },
            show: true  // 图注
        },
        geo: {
            map: 'china',
            roam: false,//不开启缩放和平移
            zoom: 1.23,//视图缩放比例
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'rgba(0,0,0,0.7)'
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0.2)'
                },
                emphasis: {
                    areaColor: '#F3B329', // 鼠标选择区域颜色
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            }
        },
        series: [
            {
                name: '信息量',
                type: 'map',
                geoIndex: 0,
                data: dataList
            }
        ]
    }
    console.log(`options:`,options)
    return options;
}