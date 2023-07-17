import { Box } from '@mantine/core'
import Request from '../Request/Request'
import Response from '../Response/Response'
import TabData from '../TabData/TabData'

export default function Main() {
  return (
    <Box>
      <Request />
      <TabData />
      <Response />
    </Box>
  )
}
