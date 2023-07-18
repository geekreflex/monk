export function convertToParams(data) {
  return data.reduce((params, { key, value }) => {
    if (key !== '' && value !== '') {
      if (params !== '') {
        params += '&'
      }
      params += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    }
    return params
  }, '')
}
