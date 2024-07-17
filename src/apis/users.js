import service from '@/service'

export const createSessions = (data) =>
  service({
    url: 'sessions',
    method: 'POST',
    data
  })
