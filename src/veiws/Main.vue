<template>
  <el-container>
    <!-- 顶部 head -->
    <el-header style="border-bottom: 1px solid gray">
      <el-row :gutter="20" style="margin: 10px 15px">
        <el-col :span="1">
          <!-- 收缩条 -->
          <a
            href="#"
            @click="changeCollapse"
            style="font-size: 25px; color: #909399"
          >
            <i :class="collpaseIcon"></i>
          </a>
        </el-col>
        <el-col :span="3" :offset="20">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-circle-check"></i> 退出</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-message"></i> 消息</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-delete-solid"></i> 删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="font-size: 25px;">Tonny</span>
        </el-col>
      </el-row>
    </el-header>
    <!-- 中央区域 -->
    <el-main>
      <el-container>
        <!-- 边侧 side -->
        <el-aside style="overflow: heidden" :style="{ width: collpaseWidth }">
          <!--default-active代表导航栏默认选中哪个index, :collapse决定导航栏是否展开，为boolean类型
                :router决定导航栏是否开启路由模式，即在菜单item上设置路由是否生效，值为boolean类型-->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :router="true"
            :collapse-transition="true"
            @select="handleSelect"
            ref="mainHeight"
          >
            <!--index设置当前item的下标，:route则是传一个对象进行，指定路由-->
            <el-menu-item index="0" :route="{ name: 'Index' }">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i> <span>系统管理</span>
              </template>

              <el-menu-item index="/setting" :route="{ name: 'Setting' }">
                <i class="el-icon-setting"></i> <span>设置</span>
              </el-menu-item>
              <el-menu-item index="/table" :route="{ name: 'Table'}">
                <i class="el-icon-s-help"></i> <span>角色管理</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user-solid"></i> <span>会员管理</span>
              </template>
              <el-menu-item index="3-1" :route="{ name: 'Customer' }">
                <i class="el-icon-s-custom"></i> <span>会员列表</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-chat-dot-round"></i> <span>会员通知</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-data"></i> <span>数据分析</span>
                </template>
                <el-menu-item index="/map" :route="{ name: 'Map' }">
                    <i class="el-icon-s-flag"></i> <span>国内区域</span>
                </el-menu-item>
                <el-menu-item index="4-2">
                    <i class="el-icon-coin"></i> <span>区域业绩</span>
                </el-menu-item>
                <el-menu-item index="4-3">
                    <i class="el-icon-s-promotion"></i> <span>达标梯形榜</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-data-line"></i> <span>帖子排行</span>
                </template>
                <el-menu-item index="5-1">
                    <i class="el-icon-s-flag"></i> <span>热门帖子</span>
                </el-menu-item>
                <el-menu-item index="5-2">
                    <i class="el-icon-coin"></i> <span>推荐帖子</span>
                </el-menu-item>
                <el-menu-item index="/posts" :route="{ name: 'Posts'}">
                    <i class="el-icon-s-promotion"></i> <span>帖子呈列</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-money"></i> <span>活动质量</span>
                </template>
                <el-menu-item index="6-1">
                    <i class="el-icon-s-flag"></i> <span>热门榜单</span>
                </el-menu-item>
                <el-menu-item index="6-2">
                    <i class="el-icon-coin"></i> <span>活动分类</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-s-management"></i> <span>广告招商</span>
                </template>
                <el-menu-item index="7-1">
                    <i class="el-icon-s-flag"></i> <span>封页广告</span>
                </el-menu-item>
                <el-menu-item index="7-2">
                    <i class="el-icon-s-marketing"></i> <span>Tip广告</span>
                </el-menu-item>
                <el-menu-item index="7-3">
                    <i class="el-icon-s-promotion"></i> <span>帖子广告</span>
                </el-menu-item>
            </el-submenu>

            <el-submenu index="8">
                <template slot="title">
                    <i class="el-icon-medal-1"></i> <span>优秀榜单</span>
                </template>
                <el-menu-item index="8-1">
                    <i class="el-icon-medal"></i> <span>蒂花之秀</span>
                </el-menu-item>
                <el-menu-item index="8-2">
                    <i class="el-icon-trophy"></i> <span>巾帼之首</span>
                </el-menu-item>
                <el-menu-item index="8-3">
                    <i class="el-icon-trophy"></i> <span>须眉之冠</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="9" :route="{ name: 'Edit',path:'/edit' }">
              <i class="el-icon-edit"></i>
              <span slot="title">帖子活动编辑</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容区 main -->
        <el-main style="overflow: heidden">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
    <!-- 脚部 footer -->
    <el-footer style="border-top: 1px solid gray;text-align: center;height: 30px">
        此 Managerial System 是 Summer · Lucky  呕心沥血的处女作
    </el-footer>
  </el-container>
</template>
<script type="text/javascript">
export default {
  name: "Main",
  data() {
    return {
      isCollapse: true, // 决定左侧是否展开
      activeIndex: '1',
      store:{}
    };
  },
  computed: {
    collpaseIcon() {
      // 左侧icon 是否开启
      return this.isCollapse ? "el-icon-s-fold" : "el-icon-s-unfold";
    },
    collpaseWidth() {
      // 是否是左侧展开的宽度
      return this.isCollapse ? "70px" : "200px";
    },
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleSelect( key, keyPath){
        console.log(`side->key,keyPath:`,key, keyPath);
        return this.activeIndex = key;
    },
  },
  mounted(){
    // let heightRef = this.$refs.mainHeight.offsetHeight
    // let store = this.store;
  }
};
</script>
<style scoped>
/*整体显示区域布局样式*/
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
}

/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  padding-left: 20px;
  text-align: left;
  padding: 0;
}

el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}

.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
}

.el-menu-item {
  padding: 0;
}

.el-menu-vertical-demo.el-menu[data-v-03c1afeb] {
  background-color: #f1f1f1;
}
</style>