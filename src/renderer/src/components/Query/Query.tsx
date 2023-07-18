import { ActionIcon, Box, Button, Center, Checkbox, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useAppStore } from '@renderer/app/appStore'
import { IconTrash } from '@tabler/icons-react'
import { IconGripVertical } from '@tabler/icons-react'
import { useEffect } from 'react'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'

export default function Query() {
  const { setParams } = useAppStore((state) => state)
  const form = useForm({
    initialValues: {
      params: [{ key: '', value: '' }]
    }
  })

  const handleAddParam = () => {
    form.insertListItem('params', { key: '', value: '' })
  }

  useEffect(() => {
    setParams(form.values.params)
  }, [form.values])

  const fields = form.values.params.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()} direction="vertical">
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size="1.2rem" />
          </Center>
          <Checkbox />
          <TextInput placeholder="Key" {...form.getInputProps(`params.${index}.key`)} />
          <TextInput placeholder="Value" {...form.getInputProps(`params.${index}.value`)} />
          <ActionIcon color="red" onClick={() => form.removeListItem('params', index)}>
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      )}
    </Draggable>
  ))

  return (
    <Box>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('params', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={handleAddParam}>Add param</Button>
      </Group>
    </Box>
  )
}
