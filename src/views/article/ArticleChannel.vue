<script setup>
import { onMounted, ref } from 'vue'
import { artiGetChannelsService, artiDelChannelService } from '@/api/article'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'

const channelList = ref([])
const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await artiGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
onMounted(() => {
  getChannelList()
})
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onAddChannel = () => {
  dialog.value.open({})
}
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artiDelChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList()
}
const onSuccess = () => {
  getChannelList()
}
</script>
<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table
      :data="channelList"
      style="width: 100%"
      v-loading="loading"
      size="large"
    >
      <el-table-column
        label="序号"
        width="100"
        type="index"
        align="center"
      ></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template #default="{ row, $index }">
          <el-button
            @click="onEditChannel(row, $index)"
            :icon="Edit"
            type="primary"
            plain
          ></el-button>
          <el-button
            @click="onDelChannel(row, $index)"
            :icon="Delete"
            type="danger"
            plain
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
  </page-container>
</template>

<style lang="scss" scoped></style>
