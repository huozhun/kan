<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="规格编号" width="180">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180">
      </el-table-column>
      <el-table-column label="规格属性" width="180">
        <template slot-scope="scope">
          <el-tag
            type="success"
            v-for="item in scope.row.attrs"
            :key="item.id"
            >{{ item }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <!-- 作用域插槽 用来获取数据-->
        <template slot-scope="scope">
          <div>
            <el-button type="primary" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="info" v-else disabled>禁用</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" @click="updata(scope.row.id)"
              >修改</el-button
            >
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="2"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changeCurrentPage"
      :current-page="page"
    >
    </el-pagination>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { reqSpecDel } from "../../../util/request";
import { alertSuccess, alertwarning } from "../../../util/alert";
export default {
  computed: {
    ...mapGetters({
      list: "spec/list",
    }),
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestSpecList: "spec/requestSpecList",
    }),
    // 删除
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        reqSpecDel({ id: id }).then((res) => {
          this.requestSpecList();
          alertSuccess(res.data.msg);
          // this.requestUserCount();
          // this.getCurrentPage(1);
        });
      });
    },
    // 更新
    updata(id) {
      this.$emit("edit", id);
    },
  },
  mounted() {
    this.requestSpecList();
  },
};
</script>
<style scoped>
img {
  width: 80px;
  height: 80px;
}
</style>