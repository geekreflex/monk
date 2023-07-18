import { Text } from '@mantine/core'
import { useAppStore } from '@renderer/app/appStore'

export default function Response() {
  const { response } = useAppStore((state) => state)
  return (
    <div>
      <Text>Response</Text>
      <div>{JSON.stringify(response)}</div>
    </div>
  )
}
