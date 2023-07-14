import { Button, Select, TextInput } from '@mantine/core'
import styles from './Request.module.css'

const methods = [
  { value: 'get', label: 'GET' },
  { value: 'post', label: 'POST' },
  { value: 'put', label: 'PUT' }
]

export default function Request(): JSX.Element {
  return (
    <div className={styles.request_wrapper}>
      <Select defaultValue="get" data={methods} searchable radius={0} />
      <form className={styles.request_form}>
        <TextInput className={styles.request_input} radius={0} />
        <Button>Send</Button>
      </form>
    </div>
  )
}
