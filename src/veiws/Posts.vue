<template>
  <div class="posts" style="overflow-y: auto" @scroll="postsRefresh">
    <div class="topic" v-for="(item, index) in list" :key="index">
      <router-link :to="{ path: '/user/' + item.author.loginname }">
        <img
          :src="item.author.avatar_url | imgCheck"
          @error="imgErr(item.author.avatar_url)"
          alt="用户头像"
        />
      </router-link>
      <span class="count">
        <em>{{ item.reply_count }}</em
        >/
        <em>{{ item.visit_count }}</em>
      </span>
      <router-link class="title" :to="{ path: '/topic' + item.id }">{{
        item.title
      }}</router-link>
      <span class="tiime">
        {{ $moment(item.last_reply_at, "YYYY-MM-DD").fromNow() }}
      </span>
      <el-button>编辑</el-button>
      <el-button style="color: red">删除</el-button>
    </div>
  </div>
</template>

<script type='text/javascript'>
import { getPosts } from "../requestAxios/api.js";
import { setSession, getSession } from "../requestAxios/utils.js";
export default {
  name: "Posts",
  data() {
    return {
      page: 1,
      limit: 20,
      store: {}, // 储存数据
      list: [],
      tab: "all",
    };
  },
  methods: {
    initPosts() {
      getPosts({
        page: this.page,
        limit: this.limit,
        tab: this.tab,
      }).then((res) => {
        this.list = res.data;
        this.limit = this.limit + 10;

        const store = this.store; //储存数据
        store[this.tab] = {
          limit: this.limit,
          data: res.data,
        };
        console.log(`posts:`, this.list);
      });
    },
    imgErr(url) {
      console.log(`imgUrl:`, url);
    },
    scollMethod() {
      // 以 body 为盒子时 可用，但是在一个 div元素会失效，可在div中添加@scroll 事件，监听div 滚动条事件；
      const sumHeight =
        document.body.scollHeiht || document.documentElement.scollHeiht;
      const viewHeight = document.documentElement.clientHeight;
      const scollHeiht =
        document.body.scrollTop || document.documentElement.scrollTop;
      viewHeight + scollHeiht >= sumHeight
        ? console.log(`refresh`)
        : console.log(`end`);
    },
    postsRefresh(e) {
      // 固定大小盒子 滚动条底部刷新获取数据  结合防抖函数 deBounce();
      // console.log(`postsScroll:`,e.srcElement.scrollTop,e);
      const ele = e.srcElement ? e.srcElement : e.target;
      ele.scrollTop + ele.offsetHeight >= ele.scrollHeight
        ? this.initPosts()
        : console.log(`end`);
    },
    deBounce(fn, wait) {
      //-->防抖函数  原理是装一个定时器
      console.log(`说,你抖了没？`);
      let timer;
      return () => {
        if (timer) {
          clearTimeout(timer);
          console.log(`我...我没抖(最后的倔强)`);
          return;
        }
        console.log(`timer:`, !timer);
        
        timer = setTimeout(() => {
          fn().apply(this, arguments);
          console.log(`我擦，我抖了`);
        }, wait);
      };
    },
  },
  filters: {
    imgCheck(url) {
      /* 源地址： https://avatars[1|2].githubusercontent.com/u/1159760?v=4&s=120
       * 把avatars后面的数字去掉即可访问到图片
       */
      return url.replace(/avatars[0-9]/, "avatars");
    },
  },
  created() {
    this.initPosts();
    window.addEventListener("scroll", this.deBounce(this.scollMethod, 50000));
    console.log(`store:`, this.store);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scollMethod);
  },
};
</script>

<style scoped>
.posts {
  height: 100%;
}
.topic {
  padding: 20px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
}

img {
  width: 50px;
  border-radius: 50%;
  height: 50px;
}

span.count {
  width: 50px;
  text-align: center;
}

.title {
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  text-decoration: none;
  color: #333;
}

span.time {
  width: 70px;
  text-align: right;
}
</style>