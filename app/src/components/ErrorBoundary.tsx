import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Code,
  Text,
} from '@chakra-ui/react'
import {
  ErrorBoundaryPropsWithComponent,
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary'

export const ErrorBoundary: React.FC<
  Partial<ErrorBoundaryPropsWithComponent>
> = (props) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={DefaultFallbackComponent}
      onError={(error, info) => console.error(error, info)}
      {...props}
    />
  )
}
const DefaultFallbackComponent: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Alert status="error" alignItems="flex-start">
      <AlertIcon />
      <AlertTitle mr={2} fontSize="md">
        Something went wrong:
      </AlertTitle>
      <AlertDescription fontSize="sm" d="flex" flexDirection="column">
        <Code colorScheme="red">{error.name}</Code>{' '}
        <Code colorScheme="red">{error.message}</Code>
        <Text>Check console output for more info</Text>
      </AlertDescription>
    </Alert>
  )
}
