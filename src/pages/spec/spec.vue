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
      data: "123",
      info: {
        isShow: false,
        isAdd: true, 
      },
    };
  },
  methods: {
    willAdd() {
      this.info.isShow = !this.info.isShow;
      this.info.isAdd = true;
    },
    edit(e) {
      console.log(e); 
      (this.info.isShow = true), (this.info.isAdd = false);
      this.$refs.one.look(e);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>