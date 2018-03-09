<template>
	<el-form ref="form" :model="form" label-width="80px">
	  <el-form-item label="贷款金额">
	    <el-input v-model="form.name"></el-input>
	  </el-form-item>
	  <el-form-item label="抵押方式">
	    <el-select v-model="form.region" placeholder="请选择抵押方式">
	      <el-option label="房产抵押" value="shanghai"></el-option>
	      <el-option label="薪资抵押" value="beijing"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="贷款时间">
	    <el-col :span="11">
	      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
	    </el-col>
	    <el-col class="line" :span="2">-</el-col>
	    <el-col :span="11">
	      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
	    </el-col>
	  </el-form-item>
	  <el-form-item label="是否匿名">
	    <el-switch v-model="form.delivery"></el-switch>
	  </el-form-item>
	  <el-form-item label="贷款用途">
	    <el-checkbox-group v-model="form.type">
	      <el-checkbox label="开网吧" name="type"></el-checkbox>
	      <el-checkbox label="娶媳妇" name="type"></el-checkbox>
	      <el-checkbox label="买车" name="type"></el-checkbox>
	      <el-checkbox label="买黄金" name="type"></el-checkbox>
	    </el-checkbox-group>
	  </el-form-item>
	  <el-form-item label="还款方式">
	    <el-radio-group v-model="form.resource">
	      <el-radio label="按揭"></el-radio>
	      <el-radio label="现款"></el-radio>
	    </el-radio-group>
	  </el-form-item>
	  <el-form-item label="相关手续">
	    <el-input type="textarea" v-model="form.desc"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="onSubmit">立即预约</el-button>
	    <el-button>取消</el-button>
	  </el-form-item>
	</el-form>
</template>
<script>
	 export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>

</style>