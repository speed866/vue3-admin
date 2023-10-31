<script setup>
import { artiGetChannelsService } from '@/api/article'
import { onMounted } from 'vue'
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String]
  }
})

const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannelList = async () => {
  const res = await artiGetChannelsService()
  channelList.value = res.data.data
}
onMounted(() => {
  getChannelList()
})
</script>
<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      :label="item.cate_name"
      :value="item.id"
      v-for="item in channelList"
      :key="item.id"
    ></el-option>
  </el-select>
</template>
