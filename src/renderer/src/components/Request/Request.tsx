import { Button, Select, TextInput } from '@mantine/core'
import styles from './Request.module.css'
import { makeApiRequest } from '@renderer/api/apiClient'
import { useStore } from '@renderer/app/store'

const methods = [
  { value: 'get', label: 'GET' },
  { value: 'post', label: 'POST' },
  { value: 'put', label: 'PUT' }
]

export default function Request(): JSX.Element {
  const { url, setUrl, method, setMethod, setResponse, requestData } = useStore((state) => state)

  const handleRequest = async (e: any) => {
    e.preventDefault()
    try {
      console.log(url, method, requestData)
      const response = await makeApiRequest(method, url, requestData)
      setResponse(response)
    } catch (error) {
      console.error('Error')
    }
  }

  return (
    <>
      <div className={styles.request_wrapper}>
        <Select defaultValue="get" data={methods} searchable radius={0} onChange={setMethod} />
        <form className={styles.request_form}>
          <TextInput
            className={styles.request_input}
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
