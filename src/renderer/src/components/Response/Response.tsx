import { useAppStore } from '@renderer/app/appStore'

export default function Response() {
  const { response } = useAppStore((state) => state)
  return (
    <div>
      <div>{JSON.stringify(response)}</div>
    </div>
  )
}
