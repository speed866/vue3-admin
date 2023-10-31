<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

const {
  userInfo: { email, id, nickname, username },
  getUserInfo
} = useUserStore()

const formModel = ref({
  username,
  nickname,
  email,
  id
})

const formRef = ref()

const rules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '昵称在2-10个非空字符之间',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入用户邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱名', trigger: 'blur' }
  ]
}

const onSubmit = async () => {
  await formRef.value.validate()
  await userUpdateInfoService(formModel.value)
  getUserInfo()
  ElMessage.success('修改成功')
}
</script>
<template>
  <PageContainer title="基本资料">
    <el-form
      :model="formModel"
      :rules="rules"
      label-width="100px"
      style="width: 50%"
      ref="formRef"
    >
      <el-form-item label="登录名称">
        <el-input disabled v-model="formModel.username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="formModel.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" prop="email">
        <el-input v-model="formModel.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交修改</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
