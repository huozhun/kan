<template>
  <div>
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-list @edit="edit($event)"></v-list>
    <v-add :info="info" ref="one"></v-add>
  </div>
</template>
<script>
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  components: {
    vList,
    vAdd,
  },
  data() {
    return {
      info: {
        isShow: false,
        isAdd: true,
        title: "角色添加",
      },
    };
  },
  methods: {
    willAdd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
      this.info.title = "角色添加";
    },
    edit(id) {
      this.info.isShow = true;
      this.info.isAdd = false;
      this.info.title = "角色修改", 
      this.$refs.one.look(id);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>