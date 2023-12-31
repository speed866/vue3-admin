import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}

export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}

export const userGetInfoService = () => request.get('/my/userinfo')

export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

export const userUpdatePwdService = ({ oldPass, newPass, checkPass }) =>
  request.patch('/my/updatepwd', {
    old_pwd: oldPass,
    new_pwd: newPass,
    re_pwd: checkPass
  })
