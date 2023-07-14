import { Tabs } from '@mantine/core'
import TabList from './TabList'
import Query from '../Query/Query'

export default function TabData(): JSX.Element {
  return (
    <Tabs defaultValue="params">
      <TabList />

      <Tabs.Panel value="params">
        <Query />
      </Tabs.Panel>
    </Tabs>
  )
}
