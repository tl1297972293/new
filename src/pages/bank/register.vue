<template>
	<div class="m">
	<br>
	<br>
		<div class="a">
			姓名
		</div>
		<div class="b">
			<el-input size="small" placeholder="请输入内容" v-model="input8"></el-input>
		</div>
		<div class="c">
			身份证号
		</div>
		<div class="d">
			<el-input size="small" placeholder="请输入内容" v-model="input8"></el-input>
		</div>
		<div class="e">
			电话号码
		</div>
		<div class="f">
			<el-input size="small" placeholder="请输入内容" v-model="input8"></el-input>
		</div>
		<br>
		<br>
		<br>
		<div class="g">
			家庭住址
		</div>
		<div class="h">
			<el-input size="small" placeholder="请输入内容" v-model="input8"></el-input>
		</div>
		<div class="i">
			E-mail
		</div>
		<div class="j">
			<el-input size="small" placeholder="请输入内容" v-model="input8"></el-input>
		</div>
		<br>
		<br>
		<br>
		<br>
		<div class="n">
			备注信息
		</div>
		<div class="l">
			<el-input
			  type="textarea"
			  :rows="2"
			  placeholder="请输入内容"
			  v-model="textarea">
			</el-input>
		</div>
		<br>
		<br>
		<div class="k">
			<el-button @click="open2" type="primary" size="small" round>提交</el-button>
		</div>
		  
	</div>
</template>
<script>
// 	export default {
//   data() {
//     return {
//       input: ''
//     }
//   }
// }
 export default {
    methods: {
      open2() {
        this.$confirm('此操作将提交已添加信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
      }
    }
  }
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.a{
		float: left;
		margin-left: 20px;
		margin-top: 20px;

	}
	.b{
		float: left;
		margin-left: 20px;
		margin-top: 16px;
		width: 150px;

	}
	.c{
		float: left;
		margin-left: 60px;
		margin-top: 20px;

	}
	.d{
		float: left;
		margin-left: 20px;
		margin-top: 16px;
		width: 250px;
	}
	.e{
		float: left;
		margin-left: 60px;
		margin-top: 20px;

	}
	.f{
		float: left;
		margin-left: 20px;
		margin-top: 16px;
		width: 150px;
	}
	.g{
		float: left;
		margin-left: 20px;
		margin-top: 20px;

	}
	.h{
		float: left;
		margin-left: 20px;
		margin-top: 16px;
		width: 150px;
	}
	.i{
		float: left;
		margin-left: 60px;
		margin-top: 20px;

	}
	.j{
		float: left;
		margin-left: 20px;
		margin-top: 16px;
		width: 180px;
	}
	.k{
		padding-left: 400px;
		margin-left: 20px;

	}
	.l{
		width: 60%;
	}
	.n{
		margin-left: 20px;
	}
</style>