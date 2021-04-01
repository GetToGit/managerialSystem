<template>
  <div id="map" style="height: 100%; width: 100%;"></div>
</template>
<script type='text/javascript'>
import "echarts/map/js/china.js";
export default {
  name: "Map",
  data() {
    return {};
  },
  methods: {
    drawMap() {
      let dataList = [
        {
          name: "陕西",
          value: 1200,
        },
        {
          name: "北京",
          value: 200,
        },
        {
          name: "四川",
          value: 200,
        },
      ]; // 此数据 从服务器获取 以上是举个例子

      let option = {
        title: {
          text: "各省活动参与人数分布",
          left: "center",
          top:'20px'
        },
        tooltip: {
          trigger: "item",
          formatter: (params) => {
            if (!params.value) {
              return "该省信息量：0";
            }
            return (
              params.seriesName +
              params.name +
              "：" +
              params.value +
              "次"
            ); // 自定义 formatter 格式
          },
          confine: true,
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 取值范围的文字
          realtime: false,
          calculable: true,
          itemWidth: 10,
          itemHeight: 70,
          inRange: {
            color: ["#006edd", "#eoffff"], //取值范围的颜色
          },
          show: true, // 图注
        },
        geo: {
          map: "china",
          roam: false, //不开启缩放和平移
          zoom: 1.23, //视图缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0,0,0,0.2)",
            },
            emphasis: {
              areaColor: "#F3B329", // 鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0,0,0,0.5)",
            },
          },
        },
        series: [
          {
            name: "信息量",
            type: "map",
            geoIndex: 0,
            data: dataList,
          },
        ],
      };
      let chinaMap = this.$echarts.init(document.getElementById("map"));
      chinaMap.setOption(option);
      this.$nextTick(() => {
        chinaMap.resize(); // 这里解决 tab 刷新 图层不刷新的问题
      });
      console.log(`option:`, option);
    },
  },
  mounted() {
    this.drawMap();
  },
  
};
</script>
<style scoped>
</style>