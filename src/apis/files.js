import service from '@/service'

export const getFiles = (params) =>
  service({
    url: 'files',
    method: 'get',
    params
  })
