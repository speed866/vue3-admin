<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { userUpdatePwdService } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const formModel = ref({
  oldPass: '',
  newPass: '',
  checkPass: ''
})
const formRef = ref()
const checkDifferent = (rule, value, callback) => {
  if (value === formModel.value.oldPass) {
    callback(new Error('新密码不能与原密码相同'))
  } else {
    callback()
  }
}
const checkSameAsNewPwd = (rule, value, callback) => {
  if (value !== formModel.value.newPass) {
    callback(new Error('确认密码必须和新密码一样'))
  } else {
    callback()
  }
}
const rules = {
  oldPass: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
  newPass: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '新密码长度必须在6-15个字符之间',
      trigger: 'blur'
    },
    {
      validator: checkDifferent,
      trigger: 'blur'
    }
  ],
  checkPass: [
    { required: true, message: '确认密码不得为空', trigger: 'blur' },
    { validator: checkSameAsNewPwd, trigger: 'blur' }
  ]
}
const userStore = useUserStore()
const router = useRouter()
const onSubmit = async () => {
  await formRef.value.validate()
  await userUpdatePwdService(formModel.value)
  ElMessage.success('修改密码成功')
  userStore.setToken('')
  userStore.clearUserInfo()
  router.push('/login')
}
const onReset = () => {
  formRef.value.resetFields()
}
</script>
<template>
  <PageContainer title="重置密码">
    <el-form
      :rules="rules"
      :model="formModel"
      label-width="100px"
      label-position="right"
      style="width: 50%"
      ref="formRef"
    >
      <el-form-item label="原密码" prop="oldPass">
        <el-input
          v-model="formModel.oldPass"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPass">
        <el-input
          v-model="formModel.newPass"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="checkPass">
        <el-input
          type="password"
          show-password
          v-model="formModel.checkPass"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" @click="onSubmit"
          >修改密码</el-button
        >
        <el-button size="large" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
