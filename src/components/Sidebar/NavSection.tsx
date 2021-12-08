import {Box, Text, Stack} from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import { ReactNode } from 'toasted-notes/node_modules/@types/react'

interface NavsectionProps {
    title: string,
    children: ReactNode
}

export const NavSection = ({title, children}:NavsectionProps) => {
    return(
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {title}
          </Text>

          <Stack spacing="4" mt="8" align="stretch">
            {children}
          </Stack>
        </Box>
    )
}