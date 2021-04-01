<template>
  <div class="table" style="height: 100%" ref="tableHeight">
    <el-table
      :border="true"
      :data="tableData"
      style="width: 100%; text-align: center"
      :height="heightRef"
      max-height="100%"
    >
      <el-table-column fixed prop="id" label="序列" sortable width="75">
      </el-table-column>
      <el-table-column prop="date" label="日期" sortable width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="详细地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column prop="remarks" label="备注" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            style="color: red"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
          >
            删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type='text/javascript'>
import { getMember } from "../requestAxios/api";
export default {
  name: "Table",
  data() {
    return {
      tableData: [],
      heightRef: 0,
    };
  },
  methods: {
    deleteRow(index, rows) {
      //这是假数据  可配合后台数据 进行操作
      rows.splice(index, 1);
      console.log(`delete:`, rows);
    },
    getTable() {
      getMember().then((res) => {
        this.tableData = res.tableData;
      });
    },
    tabHeight() {
      let heightRef = this.$refs.tableHeight.offsetHeight;
      this.heightRef = heightRef;
    },
  },
  created() {
    this.getTable();
  },
  mounted() {
    let heightRef = this.$refs.tableHeight.offsetHeight;
    this.heightRef = heightRef + "";
    this.$nextTick(() => {
      //-->必须在dom渲染完成后在获取不然会出现获取dom的数值错误的情况，
      this.tabHeight();
    });
  },
};
</script>

<style scoped>
</style>