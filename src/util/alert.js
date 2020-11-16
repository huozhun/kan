import Vue from 'vue'
let ve = new Vue();

export const alertSuccess = (msg) => {
    ve.$message({
        message: msg,
        type: 'success'
    });
}

export const alertwarning =(msg)=>{
    ve.$message({
        type: 'warning',
        message: msg
      });
}