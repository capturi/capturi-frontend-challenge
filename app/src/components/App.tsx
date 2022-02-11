import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  List,
  ListItem,
  Spinner,
  Text,
  chakra,
  theme,
} from '@chakra-ui/react'
import * as React from 'react'
import { Tracker } from 'shared'
import useSWR from 'swr'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { ErrorBoundary } from './ErrorBoundary'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box pos="fixed" top={2} right={4}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
      <Container mt="20vh">
        <Heading mb={4}>Trackers</Heading>
        <ErrorBoundary>
          <React.Suspense fallback={<Spinner />}>
            <TrackerList />
          </React.Suspense>
        </ErrorBoundary>
      </Container>
    </ChakraProvider>
  )
}

const TrackerList = () => {
  const { data } = useSWR<Tracker[]>('trackers')
  return (
    <List spacing={3} fontSize="xl">
      {data?.map((x) => (
        <ListItem key={x.id}>
          <Text>
            {x.name} <chakra.span color="gray.600">({x.speaker})</chakra.span>
          </Text>
          <Text fontSize="sm" color="gray.600">
            {x.phrases.join(', ')}
          </Text>
        </ListItem>
      ))}
    </List>
  )
}
