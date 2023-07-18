import { Button, Select, TextInput } from '@mantine/core'
import styles from './Request.module.css'
import { makeApiRequest } from '@renderer/api/apiClient'
import { useAppStore } from '@renderer/app/appStore'
import { useEffect, useState } from 'react'
import { converArrayToQueryString } from '@renderer/utils/query'

const methods = [
  { value: 'get', label: 'GET' },
  { value: 'post', label: 'POST' },
  { value: 'put', label: 'PUT' },
  { value: 'patch', label: 'PATCH' },
  { value: 'delete', label: 'DELETE' }
]

export default function Request() {
  const [queryString, setQueryString] = useState('')
  const { url, setUrl, method, setMethod, setResponse, requestData, params } = useAppStore(
    (state) => state
  )

  useEffect(() => {
    const newUrl = url.split('?')[0]
    const qs = converArrayToQueryString(params!)
    setQueryString(qs)
    setUrl(`${newUrl}?${qs}`)
  }, [params])

  const handleRequest = async (e: any) => {
    e.preventDefault()
    try {
      const response = await makeApiRequest(method, url, requestData, queryString)
      setResponse(response)
    } catch (error) {}
  }

  return (
    <>
      <div className={styles.request_wrapper}>
        <Select defaultValue="get" data={methods} searchable radius={0} onChange={setMethod} />
        <form className={styles.request_form}>
          <TextInput
            className={styles.request_input}
            placeholder="https://example.com"
            radius={0}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={handleRequest} type="submit">
            Send
          </Button>
        </form>
      </div>
    </>
  )
}
