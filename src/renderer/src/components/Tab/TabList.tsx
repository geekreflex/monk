import { Tabs } from '@mantine/core'

const tabList = [
  { value: 'params', label: 'Params' },
  { value: 'auth', label: 'Authorization' },
  { value: 'headers', label: 'Headers' },
  { value: 'body', label: 'Body' }
]

export default function TabList(): JSX.Element {
  return (
    <Tabs.List>
      {tabList.map((tab) => (
        <Tabs.Tab key={tab.value} value={tab.value}>
          {tab.label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  )
}
