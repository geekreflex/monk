interface KeyValuePair {
  key: string
  value: string
}

export const converArrayToQueryString = (array: KeyValuePair[]): string => {
  const queryString = array
    .map(({ key, value }) => {
      if (value === '') {
        return encodeURIComponent(key)
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      }
    })
    .join('&')
  return queryString
}
