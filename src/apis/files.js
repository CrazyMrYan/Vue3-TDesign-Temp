import service from '@/service'

export const getFiles = (params) =>
  service({
    url: 'files',
    method: 'get',
    params
  })

export const uploadFiles = (params, data) =>
  service({
    url: 'files',
    method: 'post',
    headers: {
      'Content-Type': 'form-data'
    },
    params,
    data
  })
