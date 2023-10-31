import request from '@/utils/request'
// 分类相关
export const artiGetChannelsService = () => request.get('/my/cate/list')

export const artiAddChannelService = (data) =>
  request.post('/my/cate/add', data)

export const artiEditChannelService = (data) =>
  request.put('/my/cate/info', data)

export const artiDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 文章相关

export const artiGetListService = (obj) =>
  request.get('/my/article/list', {
    params: obj
  })

export const artiAddService = (data) => request.post('/my/article/add', data)

// 获取文章详情
export const artiGetDetailService = (id) =>
  request.get('/my/article/info', {
    params: {
      id
    }
  })

export const artiEditService = (data) => request.put('/my/article/info', data)
