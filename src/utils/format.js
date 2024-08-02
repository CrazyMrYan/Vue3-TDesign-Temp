export const convertPageToOffsetLimit = (page, pageSize) => {
  if (page < 1) {
    throw new Error('Page number must be greater than 0')
  }
  if (pageSize < 1) {
    throw new Error('Page size must be greater than 0')
  }
  const offset = (page - 1) * pageSize
  const limit = pageSize

  return { offset, limit }
}
