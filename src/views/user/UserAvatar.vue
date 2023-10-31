<script setup>
import { ref } from 'vue'
import PageContainer from '@/components/PageContainer.vue'
import { Plus, Upload } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { userUpdateAvatarService } from '@/api/user'

const userStore = useUserStore()

const uploadRef = ref()

const imgUrl = ref(userStore.userInfo.user_pic)
const onSelectFile = (uploadFile) => {
  // imgUrl.value = URL.createObjectURL(uploadFile.raw)
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imgUrl.value = reader.result
  }
}
const onSubmit = async () => {
  await userUpdateAvatarService(imgUrl.value)
  userStore.getUserInfo()
  ElMessage.success('上传成功')
}
</script>
<template>
  <PageContainer title="更换头像">
    <el-upload
      :auto-upload="false"
      class="avatar-uploader"
      :show-file-list="false"
      ref="uploadRef"
      :on-change="onSelectFile"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <br />

    <el-button
      type="primary"
      :icon="Plus"
      size="large"
      @click="uploadRef.$el.querySelector('input').click()"
      >选择图片</el-button
    >
    <el-button :icon="Upload" size="large" type="success" @click="onSubmit"
      >上传头像</el-button
    >
  </PageContainer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
</style>
